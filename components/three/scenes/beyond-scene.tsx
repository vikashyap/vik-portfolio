"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useScrollStore } from "@/lib/scroll-store"
import { presence, PALETTE } from "../shared/scene-utils"

const SHAPE_COUNT = 9

// Playful low-poly scatter with a warm purple→pink tint. Content-forward
// section, so the 3D stays gentle and peripheral.
export default function BeyondScene() {
  const group = useRef<THREE.Group>(null)
  const refs = useRef<(THREE.Mesh | null)[]>([])

  const shapes = useMemo(
    () =>
      Array.from({ length: SHAPE_COUNT }, (_, i) => {
        const angle = (i / SHAPE_COUNT) * Math.PI * 2
        return {
          x: Math.cos(angle) * (2.5 + (i % 3) * 0.8),
          y: ((i % 5) - 2) * 0.7,
          z: Math.sin(angle) * 1.5 - 1,
          kind: i % 4,
          scale: 0.12 + (i % 4) * 0.05,
          speed: 0.3 + (i % 3) * 0.15,
          color: i % 2 === 0 ? PALETTE.pink : PALETTE.violetLight,
        }
      }),
    [],
  )

  useFrame((state) => {
    if (!group.current) return
    const p = useScrollStore.getState().sectionProgress["beyond"] ?? 0
    const vis = presence(p, 0.1, 0.35, 0.65, 0.9)

    group.current.visible = vis > 0.01
    if (!group.current.visible) return

    const t = state.clock.elapsedTime
    group.current.rotation.y = t * 0.05

    shapes.forEach((shape, i) => {
      const mesh = refs.current[i]
      if (!mesh) return
      mesh.position.y = shape.y + Math.sin(t * shape.speed + i * 2) * 0.25
      mesh.rotation.x = t * shape.speed * 0.7
      mesh.rotation.z = t * shape.speed * 0.4
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.opacity = vis * 0.9
    })
  })

  return (
    <group ref={group} position={[0.8, 0, -1]}>
      {shapes.map((shape, i) => (
        <mesh
          key={i}
          position={[shape.x, shape.y, shape.z]}
          scale={shape.scale}
          ref={(el) => {
            refs.current[i] = el
          }}
        >
          {shape.kind === 0 ? (
            <torusGeometry args={[1, 0.4, 8, 16]} />
          ) : shape.kind === 1 ? (
            <coneGeometry args={[0.9, 1.6, 5]} />
          ) : shape.kind === 2 ? (
            <icosahedronGeometry args={[1, 0]} />
          ) : (
            <torusKnotGeometry args={[0.7, 0.28, 40, 8]} />
          )}
          <meshStandardMaterial
            color={shape.color}
            emissive={shape.color}
            emissiveIntensity={0.45}
            transparent
            opacity={0}
            roughness={0.3}
            metalness={0.5}
            flatShading
          />
        </mesh>
      ))}
    </group>
  )
}
