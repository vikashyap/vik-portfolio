"use client"

import React, { Component, lazy, Suspense, type ReactNode, useEffect, useMemo, useState } from "react"
import { Canvas } from "@react-three/fiber"
import CameraRig from "./camera-rig"
import World from "./world"
import { getPerfTier, type PerfTier } from "@/lib/perf"

const Effects = lazy(() => import("./effects"))

class SceneErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    // The page's gradient BackgroundFallback sits behind the canvas,
    // so on WebGL failure we simply render nothing.
    if (this.state.hasError) return null
    return this.props.children
  }
}

export default function SceneCanvas() {
  const tier = useMemo<PerfTier>(() => getPerfTier(), [])
  const [visible, setVisible] = useState(true)

  // Pause the render loop entirely when the tab is hidden
  useEffect(() => {
    const onVisibility = () => setVisible(document.visibilityState === "visible")
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  return (
    <SceneErrorBoundary>
      <div className="fixed inset-0" aria-hidden="true">
        <Canvas
          dpr={tier === "high" ? [1, 1.75] : [1, 1.5]}
          frameloop={visible ? "always" : "never"}
          camera={{ position: [0, 0, 7], fov: 60, near: 0.1, far: 60 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <CameraRig />
          <World tier={tier} />
          {tier === "high" && (
            <Suspense fallback={null}>
              <Effects />
            </Suspense>
          )}
        </Canvas>
      </div>
    </SceneErrorBoundary>
  )
}
