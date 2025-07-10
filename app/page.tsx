"use client"
import dynamic from "next/dynamic"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

// Dynamically import the 3D components to prevent SSR issues
const Scene3D = dynamic(() => import("@/components/scene-3d"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />,
})

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
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
