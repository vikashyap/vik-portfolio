"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useScrollStore } from "@/lib/scroll-store"
import { PARTICLE_COUNTS, type PerfTier } from "@/lib/perf"

interface ParticleFieldProps {
  tier: PerfTier
}

// One Points cloud that wraps the whole camera journey in ambient violet dust.
export default function ParticleField({ tier }: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null)
  const count = PARTICLE_COUNTS[tier]

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const palette = [
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#a78bfa"),
      new THREE.Color("#22d3ee"),
      new THREE.Color("#6d28d9"),
    ]
    for (let i = 0; i < count; i++) {
      // Distribute in a wide flattened shell around the camera path
      const r = 6 + Math.random() * 14
      const theta = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 14
      positions[i * 3] = Math.cos(theta) * r
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = Math.sin(theta) * r - 4
      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    return { positions, colors }
  }, [count])

  useFrame((_, delta) => {
    if (!ref.current) return
    const { progress } = useScrollStore.getState()
    // Slow ambient rotation plus a gentle scroll-linked drift
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x = progress * 0.3
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
