"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useScrollStore } from "@/lib/scroll-store"
import { smoothstep, PALETTE } from "../shared/scene-utils"

const PARTICLES = 600

// Scattered particles converge into a pulsing beacon behind the contact form.
export default function ContactScene() {
  const group = useRef<THREE.Group>(null)
  const points = useRef<THREE.Points>(null)
  const beacon = useRef<THREE.Mesh>(null)

  const { positions, scattered, converged } = useMemo(() => {
    const scattered = new Float32Array(PARTICLES * 3)
    const converged = new Float32Array(PARTICLES * 3)
    for (let i = 0; i < PARTICLES; i++) {
      // Scattered: wide shell
      const r1 = 3 + Math.random() * 5
      const theta1 = Math.random() * Math.PI * 2
      const phi1 = Math.acos(2 * Math.random() - 1)
      scattered[i * 3] = r1 * Math.sin(phi1) * Math.cos(theta1)
      scattered[i * 3 + 1] = r1 * Math.sin(phi1) * Math.sin(theta1)
      scattered[i * 3 + 2] = r1 * Math.cos(phi1)
      // Converged: tight sphere surface
      const r2 = 0.9 + Math.random() * 0.15
      converged[i * 3] = (scattered[i * 3] / r1) * r2
      converged[i * 3 + 1] = (scattered[i * 3 + 1] / r1) * r2
      converged[i * 3 + 2] = (scattered[i * 3 + 2] / r1) * r2
    }
    return { positions: scattered.slice(), scattered, converged }
  }, [])

  useFrame((state) => {
    if (!group.current || !points.current) return
    const p = useScrollStore.getState().sectionProgress["contact"] ?? 0
    // Contact is the last section: never fade out at the bottom
    const vis = smoothstep(0.1, 0.4, p)

    group.current.visible = vis > 0.01
    if (!group.current.visible) return

    const t = state.clock.elapsedTime
    const converge = smoothstep(0.25, 0.75, p)

    const attr = points.current.geometry.getAttribute("position") as THREE.BufferAttribute
    const arr = attr.array as Float32Array
    for (let i = 0; i < PARTICLES * 3; i++) {
      arr[i] = scattered[i] + (converged[i] - scattered[i]) * converge
    }
    attr.needsUpdate = true

    points.current.rotation.y = t * 0.15
    const pMat = points.current.material as THREE.PointsMaterial
    pMat.opacity = 0.8 * vis

    if (beacon.current) {
      const pulse = 1 + Math.sin(t * 2.5) * 0.08
      beacon.current.scale.setScalar(0.55 * converge * pulse)
      const mat = beacon.current.material as THREE.MeshStandardMaterial
      mat.opacity = converge * 0.9
      mat.emissiveIntensity = 1.2 + Math.sin(t * 2.5) * 0.5
    }
  })

  return (
    <group ref={group} position={[0, 0, -3]}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={PARTICLES} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          color={PALETTE.violetLight}
          size={0.035}
          transparent
          opacity={0}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <mesh ref={beacon}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={PALETTE.violet}
          emissive={PALETTE.violet}
          emissiveIntensity={1.2}
          transparent
          opacity={0}
          roughness={0.1}
        />
      </mesh>
    </group>
  )
}
