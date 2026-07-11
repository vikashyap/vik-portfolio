"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import BeyondCode from "@/components/beyond-code"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import ScrollTracker from "@/components/scroll-tracker"
import SmoothScroll from "@/components/smooth-scroll"
import { getPerfTier, prefersReducedMotion } from "@/lib/perf"

const SceneCanvas = dynamic(() => import("@/components/three/scene-canvas"), {
  ssr: false,
})

// Always rendered behind the canvas — it is the permanent fallback for
// no-WebGL, reduced-motion, and low-power devices.
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
    if (prefersReducedMotion()) return
    if (getPerfTier() === "low") return
    setShow3D(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background: gradient always, 3D world layered on top when capable */}
      <div className="fixed inset-0 z-0">
        <BackgroundFallback />
        {show3D && <SceneCanvas />}
      </div>

      <ScrollTracker />
      <SmoothScroll />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <BeyondCode />
        <Contact />
      </div>
    </div>
  )
}
