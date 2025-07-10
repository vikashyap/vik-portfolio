"use client"

import { Suspense, useEffect, useState } from "react"

// Loading fallback component
function Scene3DFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-purple-400 text-lg">Loading 3D Scene...</div>
    </div>
  )
}

// Error boundary for 3D components
function Scene3DError() {
  return <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
}

export default function Scene3D() {
  const [isClient, setIsClient] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render on server
  if (!isClient) {
    return <Scene3DFallback />
  }

  // Handle errors gracefully
  if (hasError) {
    return <Scene3DError />
  }

  try {
    // Lazy load the actual 3D scene
    const Scene3DCanvas = require("./scene-3d-canvas").default

    return (
      <Suspense fallback={<Scene3DFallback />}>
        <Scene3DCanvas onError={() => setHasError(true)} />
      </Suspense>
    )
  } catch (error) {
    console.warn("3D Scene failed to load:", error)
    return <Scene3DError />
  }
}
