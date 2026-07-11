"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useScrollStore } from "@/lib/scroll-store"
import { presence, smoothstep, PALETTE } from "../shared/scene-utils"

const SHARD_COUNT = 7

// Crystalline icosahedron cluster. Fractures apart as the camera
// pushes through it on scroll-out.
export default function HeroScene() {
  const group = useRef<THREE.Group>(null)
  const core = useRef<THREE.Mesh>(null)
  const coreWire = useRef<THREE.Mesh>(null)
  const shardRefs = useRef<(THREE.Mesh | null)[]>([])

  const shards = useMemo(
    () =>
      Array.from({ length: SHARD_COUNT }, (_, i) => {
        const angle = (i / SHARD_COUNT) * Math.PI * 2
        const tilt = ((i % 3) - 1) * 0.6
        return {
          dir: new THREE.Vector3(Math.cos(angle), tilt, Math.sin(angle)).normalize(),
          baseRadius: 1.6 + (i % 3) * 0.35,
          scale: 0.16 + ((i * 7) % 5) * 0.05,
          speed: 0.2 + (i % 4) * 0.08,
        }
      }),
    [],
  )

  useFrame((state, delta) => {
    if (!group.current) return
    const { sectionProgress, pointer } = useScrollStore.getState()
    // Hero sits at page top: progress starts ~0.5 and rises as you scroll away
    const p = sectionProgress["home"] ?? 0.5
    const vis = presence(p, 0, 0.01, 0.62, 0.95)
    // 0 at rest, 1 fully fractured
    const fracture = smoothstep(0.55, 0.9, p)

    group.current.visible = vis > 0.01
    if (!group.current.visible) return

    const t = state.clock.elapsedTime
    group.current.rotation.y += delta * 0.15
    // Pointer parallax tilt
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * 0.15, 3, delta)
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, pointer.x * 0.1, 3, delta)

    if (core.current) {
      const s = 1 - fracture * 0.35
      core.current.scale.setScalar(s)
      const mat = core.current.material as THREE.MeshStandardMaterial
      mat.opacity = 0.55 * vis * (1 - fracture * 0.6)
    }
    if (coreWire.current) {
      coreWire.current.rotation.y = -t * 0.1
      const mat = coreWire.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.5 * vis
      coreWire.current.scale.setScalar(1.15 + fracture * 0.5)
    }

    shards.forEach((shard, i) => {
      const mesh = shardRefs.current[i]
      if (!mesh) return
      const r = shard.baseRadius + Math.sin(t * shard.speed + i) * 0.15 + fracture * 4.5
      mesh.position.copy(shard.dir).multiplyScalar(r)
      mesh.rotation.x = t * shard.speed
      mesh.rotation.y = t * shard.speed * 1.3
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.opacity = vis * (1 - fracture * 0.4)
    })
  })

  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={PALETTE.violet}
          emissive={PALETTE.violetDeep}
          emissiveIntensity={0.6}
          transparent
          opacity={0.55}
          roughness={0.15}
          metalness={0.7}
          flatShading
        />
      </mesh>
      <mesh ref={coreWire}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={PALETTE.violetLight} wireframe transparent opacity={0.5} />
      </mesh>
      {shards.map((shard, i) => (
        <mesh
          key={i}
          ref={(el) => {
            shardRefs.current[i] = el
          }}
          scale={shard.scale}
        >
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? PALETTE.cyan : PALETTE.violetLight}
            emissive={i % 3 === 0 ? PALETTE.cyan : PALETTE.violet}
            emissiveIntensity={0.8}
            transparent
            opacity={1}
            roughness={0.2}
            metalness={0.6}
            flatShading
          />
        </mesh>
      ))}
    </group>
  )
}
