"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import FloatingGeometry from "@/components/floating-geometry"

function Scene3DContent() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Suspense fallback={null}>
        <Environment preset="night" />
        <FloatingGeometry />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  )
}

export default function Scene3D() {
  return (
    <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />}>
      <Scene3DContent />
    </Suspense>
  )
}
