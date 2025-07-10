"use client"

import type React from "react"

import { Suspense, useState, useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

// Simple fallback background
function BackgroundFallback() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900" />
    </div>
  )
}

export default function Portfolio() {
  const [show3D, setShow3D] = useState(false)

  useEffect(() => {
    // Only show 3D on client and after a delay
    const timer = setTimeout(() => {
      setShow3D(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background - either 3D or fallback */}
      <div className="fixed inset-0 z-0">
        {show3D ? (
          <Suspense fallback={<BackgroundFallback />}>
            <Scene3DLazy />
          </Suspense>
        ) : (
          <BackgroundFallback />
        )}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

// Lazy loaded 3D scene
function Scene3DLazy() {
  const [Scene3D, setScene3D] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    import("@/components/scene-3d")
      .then((module) => setScene3D(() => module.default))
      .catch(() => setScene3D(() => BackgroundFallback))
  }, [])

  if (!Scene3D) {
    return <BackgroundFallback />
  }

  return <Scene3D />
}
