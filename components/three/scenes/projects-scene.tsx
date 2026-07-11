"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useScrollStore } from "@/lib/scroll-store"
import { presence, smoothstep, PALETTE } from "../shared/scene-utils"

const PANEL_COUNT = 4

// Floating glass panels arranged in a shallow arc, rotating to face
// the camera one after another as the section scrolls.
export default function ProjectsScene() {
  const group = useRef<THREE.Group>(null)
  const refs = useRef<(THREE.Group | null)[]>([])

  const panels = useMemo(
    () =>
      Array.from({ length: PANEL_COUNT }, (_, i) => {
        const spread = (i / (PANEL_COUNT - 1) - 0.5) * 2 // -1..1
        return {
          x: spread * 2.6,
          z: -Math.abs(spread) * 1.2,
          baseRotY: -spread * 0.5,
          floatPhase: i * 1.7,
          color: [PALETTE.violet, PALETTE.pink, PALETTE.cyan, PALETTE.violetLight][i],
        }
      }),
    [],
  )

  useFrame((state) => {
    if (!group.current) return
    const p = useScrollStore.getState().sectionProgress["projects"] ?? 0
    const vis = presence(p, 0.1, 0.35, 0.65, 0.9)

    group.current.visible = vis > 0.01
    if (!group.current.visible) return

    const t = state.clock.elapsedTime
    // Sequential "presentation": each panel turns toward camera in its window
    const sweep = smoothstep(0.2, 0.7, p) * PANEL_COUNT

    panels.forEach((panel, i) => {
      const g = refs.current[i]
      if (!g) return
      const featured = Math.min(1, Math.max(0, sweep - i))
      g.position.set(
        panel.x,
        Math.sin(t * 0.7 + panel.floatPhase) * 0.12,
        panel.z + featured * 0.4,
      )
      g.rotation.y = panel.baseRotY * (1 - featured)
      g.rotation.x = Math.sin(t * 0.5 + panel.floatPhase) * 0.04
      g.scale.setScalar(0.9 + featured * 0.15)
      g.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.MeshStandardMaterial
          mat.opacity = (mat.userData.baseOpacity as number) * vis
        }
      })
    })
  })

  return (
    <group ref={group} position={[-1, 0, -1.5]}>
      {panels.map((panel, i) => (
        <group
          key={i}
          ref={(el) => {
            refs.current[i] = el
          }}
        >
          {/* Glass slab */}
          <mesh>
            <boxGeometry args={[1.4, 0.9, 0.04]} />
            <meshStandardMaterial
              color="#1e1b4b"
              transparent
              opacity={0.45}
              roughness={0.1}
              metalness={0.3}
              userData={{ baseOpacity: 0.45 }}
            />
          </mesh>
          {/* Glowing edge frame */}
          <mesh position={[0, 0, 0.021]}>
            <planeGeometry args={[1.4, 0.9]} />
            <meshStandardMaterial
              color={panel.color}
              emissive={panel.color}
              emissiveIntensity={0.4}
              transparent
              opacity={0.12}
              userData={{ baseOpacity: 0.12 }}
            />
          </mesh>
          {/* Accent bar, echoing the DOM card header */}
          <mesh position={[0, 0.38, 0.03]}>
            <boxGeometry args={[1.3, 0.05, 0.01]} />
            <meshStandardMaterial
              color={panel.color}
              emissive={panel.color}
              emissiveIntensity={1.5}
              transparent
              opacity={0.9}
              userData={{ baseOpacity: 0.9 }}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}
