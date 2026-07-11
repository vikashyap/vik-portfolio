"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useScrollStore } from "@/lib/scroll-store"
import { presence, clamp01, PALETTE } from "../shared/scene-utils"

const MILESTONES = 5 // Natuvion, Tenderize, Snubes, Ticketmaster, Jade Global

// A glowing helical timeline; one pulsing milestone marker per employer.
export default function ExperienceScene() {
  const group = useRef<THREE.Group>(null)
  const tube = useRef<THREE.Mesh>(null)
  const markerRefs = useRef<(THREE.Mesh | null)[]>([])

  const { curve, markerPoints } = useMemo(() => {
    const points: THREE.Vector3[] = []
    const turns = 2.2
    const height = 4
    const radius = 1.4
    const steps = 60
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const angle = t * Math.PI * 2 * turns
      points.push(
        new THREE.Vector3(Math.cos(angle) * radius, height / 2 - t * height, Math.sin(angle) * radius),
      )
    }
    const curve = new THREE.CatmullRomCurve3(points)
    const markerPoints = Array.from({ length: MILESTONES }, (_, i) =>
      curve.getPoint((i + 0.5) / MILESTONES),
    )
    return { curve, markerPoints }
  }, [])

  useFrame((state) => {
    if (!group.current) return
    const p = useScrollStore.getState().sectionProgress["experience"] ?? 0
    const vis = presence(p, 0.1, 0.3, 0.7, 0.92)

    group.current.visible = vis > 0.01
    if (!group.current.visible) return

    const t = state.clock.elapsedTime
    group.current.rotation.y = p * Math.PI * 0.6 + t * 0.05

    if (tube.current) {
      const mat = tube.current.material as THREE.MeshStandardMaterial
      mat.opacity = 0.7 * vis
    }

    // Milestones pulse one after another as the timeline scrolls
    const timelinePos = clamp01((p - 0.25) / 0.5) * MILESTONES
    markerRefs.current.forEach((mesh, i) => {
      if (!mesh) return
      const active = clamp01(timelinePos - i)
      const pulse = active > 0 && active < 1 ? 1 + Math.sin(t * 5) * 0.25 : 1
      mesh.scale.setScalar((0.12 + active * 0.1) * pulse * vis)
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.emissiveIntensity = 0.4 + active * 1.6
      mat.opacity = vis
    })
  })

  return (
    <group ref={group} position={[0, 0, -3]}>
      <mesh ref={tube}>
        <tubeGeometry args={[curve, 100, 0.035, 8, false]} />
        <meshStandardMaterial
          color={PALETTE.violet}
          emissive={PALETTE.violetDeep}
          emissiveIntensity={1.2}
          transparent
          opacity={0.7}
          roughness={0.3}
        />
      </mesh>
      {markerPoints.map((point, i) => (
        <mesh
          key={i}
          position={point}
          ref={(el) => {
            markerRefs.current[i] = el
          }}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={i === 0 ? PALETTE.cyan : PALETTE.violetLight}
            emissive={i === 0 ? PALETTE.cyan : PALETTE.violet}
            emissiveIntensity={0.4}
            transparent
            opacity={0}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}
