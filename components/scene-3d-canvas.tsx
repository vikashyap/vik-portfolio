"use client"

import { Suspense, useRef, useEffect } from "react"

interface Scene3DCanvasProps {
  onError: () => void
}

export default function Scene3DCanvas({ onError }: Scene3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mounted = true

    const loadThreeJS = async () => {
      try {
        // Dynamic import of Three.js components
        const { Canvas } = await import("@react-three/fiber")
        const { Environment, OrbitControls } = await import("@react-three/drei")
        const { createRoot } = await import("react-dom/client")
        const React = await import("react")

        if (!mounted || !containerRef.current) return

        // Simple 3D scene without complex geometries
        const Scene = () =>
          React.createElement(
            Canvas,
            {
              camera: { position: [0, 0, 5], fov: 75 },
              style: { width: "100%", height: "100%" },
            },
            [
              React.createElement(Suspense, { key: "suspense", fallback: null }, [
                React.createElement(Environment, { key: "env", preset: "night" }),
                React.createElement(SimpleGeometry, { key: "geo" }),
                React.createElement(OrbitControls, {
                  key: "controls",
                  enableZoom: false,
                  enablePan: false,
                  autoRotate: true,
                  autoRotateSpeed: 0.5,
                }),
              ]),
            ],
          )

        const root = createRoot(containerRef.current)
        root.render(React.createElement(Scene))
      } catch (error) {
        console.warn("Failed to load 3D scene:", error)
        if (mounted) {
          onError()
        }
      }
    }

    loadThreeJS()

    return () => {
      mounted = false
    }
  }, [onError])

  return <div ref={containerRef} className="w-full h-full" style={{ minHeight: "100vh" }} />
}

// Simplified geometry component
function SimpleGeometry() {
  const meshRef = useRef<any>(null)

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01
        meshRef.current.rotation.y += 0.01
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.3} />
    </mesh>
  )
}
