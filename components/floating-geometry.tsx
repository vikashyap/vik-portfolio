"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export default function FloatingGeometry() {
  const mesh1 = useRef<Mesh>(null)
  const mesh2 = useRef<Mesh>(null)
  const mesh3 = useRef<Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (mesh1.current) {
      mesh1.current.rotation.x = time * 0.2
      mesh1.current.rotation.y = time * 0.3
      mesh1.current.position.y = Math.sin(time) * 0.5
    }

    if (mesh2.current) {
      mesh2.current.rotation.x = time * 0.3
      mesh2.current.rotation.z = time * 0.2
      mesh2.current.position.x = Math.cos(time * 0.5) * 2
      mesh2.current.position.y = Math.sin(time * 0.5) * 2
    }

    if (mesh3.current) {
      mesh3.current.rotation.y = time * 0.4
      mesh3.current.rotation.z = time * 0.1
      mesh3.current.position.x = Math.sin(time * 0.3) * 3
      mesh3.current.position.z = Math.cos(time * 0.3) * 2
    }
  })

  return (
    <>
      <mesh ref={mesh1} position={[-2, 0, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.3} />
      </mesh>

      <mesh ref={mesh2} position={[2, 1, -1]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial color="#a855f7" transparent opacity={0.4} />
      </mesh>

      <mesh ref={mesh3} position={[0, -1, -3]}>
        <tetrahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#c084fc" transparent opacity={0.2} />
      </mesh>

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  )
}
