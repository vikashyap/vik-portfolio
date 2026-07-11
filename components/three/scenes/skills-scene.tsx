"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useScrollStore } from "@/lib/scroll-store"
import { presence, clamp01, PALETTE } from "../shared/scene-utils"

const NODE_COUNT = 30
const LINK_DISTANCE = 1.4

// Constellation of emissive nodes that light up in waves as the
// skills section scrolls (mirroring the DOM progress bars).
export default function SkillsScene() {
  const group = useRef<THREE.Group>(null)
  const instanced = useRef<THREE.InstancedMesh>(null)
  const lines = useRef<THREE.LineSegments>(null)

  const { nodes, linePositions, linePairs } = useMemo(() => {
    const rng = (seed: number) => {
      // Deterministic pseudo-random so SSR/CSR agree and layout is stable
      const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
      return x - Math.floor(x)
    }
    const nodes = Array.from({ length: NODE_COUNT }, (_, i) => {
      return new THREE.Vector3(
        (rng(i * 3 + 1) - 0.5) * 4.5,
        (rng(i * 3 + 2) - 0.5) * 3,
        (rng(i * 3 + 3) - 0.5) * 2.5,
      )
    })
    const pairs: [number, number][] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodes[i].distanceTo(nodes[j]) < LINK_DISTANCE) pairs.push([i, j])
      }
    }
    const linePositions = new Float32Array(pairs.length * 6)
    pairs.forEach(([a, b], k) => {
      nodes[a].toArray(linePositions, k * 6)
      nodes[b].toArray(linePositions, k * 6 + 3)
    })
    return { nodes, linePositions, linePairs: pairs }
  }, [])

  const dummy = useMemo(() => new THREE.Object3D(), [])
  const colorA = useMemo(() => new THREE.Color(PALETTE.violetDeep), [])
  const colorB = useMemo(() => new THREE.Color(PALETTE.cyan), [])
  const tmpColor = useMemo(() => new THREE.Color(), [])

  useFrame((state) => {
    if (!group.current || !instanced.current) return
    const p = useScrollStore.getState().sectionProgress["skills"] ?? 0
    const vis = presence(p, 0.1, 0.35, 0.65, 0.9)

    group.current.visible = vis > 0.01
    if (!group.current.visible) return

    const t = state.clock.elapsedTime
    group.current.rotation.y = Math.sin(t * 0.1) * 0.15
    // Wave of illumination sweeping through the constellation with scroll
    const wave = clamp01((p - 0.2) / 0.5)

    nodes.forEach((pos, i) => {
      const lit = clamp01(wave * NODE_COUNT * 1.4 - i) // sequential light-up
      const breathe = 1 + Math.sin(t * 1.5 + i * 0.7) * 0.12
      dummy.position.copy(pos)
      dummy.scale.setScalar((0.05 + lit * 0.06) * breathe * vis)
      dummy.updateMatrix()
      instanced.current!.setMatrixAt(i, dummy.matrix)
      tmpColor.copy(colorA).lerp(colorB, lit)
      instanced.current!.setColorAt(i, tmpColor)
    })
    instanced.current.instanceMatrix.needsUpdate = true
    if (instanced.current.instanceColor) instanced.current.instanceColor.needsUpdate = true

    if (lines.current) {
      const mat = lines.current.material as THREE.LineBasicMaterial
      mat.opacity = 0.25 * vis * (0.3 + wave * 0.7)
    }
  })

  return (
    <group ref={group} position={[-1, 0, -2]}>
      <instancedMesh ref={instanced} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePairs.length * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={PALETTE.violetLight} transparent opacity={0.25} />
      </lineSegments>
    </group>
  )
}
