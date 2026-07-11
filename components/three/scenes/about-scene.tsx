"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useScrollStore } from "@/lib/scroll-store"
import { presence, PALETTE } from "../shared/scene-utils"

const TOTEM_COUNT = 10

// Orbiting ring of low-poly "tech totems", weighted to the right of the
// About content column.
export default function AboutScene() {
  const group = useRef<THREE.Group>(null)
  const ring = useRef<THREE.Group>(null)
  const refs = useRef<(THREE.Mesh | null)[]>([])

  const totems = useMemo(
    () =>
      Array.from({ length: TOTEM_COUNT }, (_, i) => ({
        angle: (i / TOTEM_COUNT) * Math.PI * 2,
        radius: 2.2,
        yBob: (i % 5) * 0.12,
        scale: 0.18 + (i % 3) * 0.06,
        kind: i % 3,
        color: [PALETTE.violet, PALETTE.cyan, PALETTE.violetLight][i % 3],
      })),
    [],
  )

  useFrame((state, delta) => {
    if (!group.current || !ring.current) return
    const p = useScrollStore.getState().sectionProgress["about"] ?? 0
    const vis = presence(p, 0.1, 0.35, 0.65, 0.9)

    group.current.visible = vis > 0.01
    if (!group.current.visible) return

    const t = state.clock.elapsedTime
    // Ring rotation scrubbed by scroll, plus slow idle spin
    ring.current.rotation.y = p * Math.PI * 1.5 + t * 0.08
    ring.current.rotation.x = 0.35 + Math.sin(t * 0.2) * 0.05
    // Assemble: totems pull in from scattered as the section enters
    const spread = 1 + (1 - vis) * 2.5

    totems.forEach((totem, i) => {
      const mesh = refs.current[i]
      if (!mesh) return
      mesh.position.set(
        Math.cos(totem.angle) * totem.radius * spread,
        Math.sin(t * 0.5 + i) * 0.2 + totem.yBob,
        Math.sin(totem.angle) * totem.radius * spread,
      )
      mesh.rotation.y = t * 0.4 + i
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.opacity = vis
    })
  })

  return (
    <group ref={group} position={[2.2, 0, -1.5]}>
      <group ref={ring}>
        {totems.map((totem, i) => (
          <mesh
            key={i}
            ref={(el) => {
              refs.current[i] = el
            }}
            scale={totem.scale}
          >
            {totem.kind === 0 ? (
              <torusKnotGeometry args={[0.8, 0.3, 48, 8]} />
            ) : totem.kind === 1 ? (
              <octahedronGeometry args={[1, 0]} />
            ) : (
              <dodecahedronGeometry args={[1, 0]} />
            )}
            <meshStandardMaterial
              color={totem.color}
              emissive={totem.color}
              emissiveIntensity={0.5}
              transparent
              opacity={0}
              roughness={0.25}
              metalness={0.6}
              flatShading
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}
