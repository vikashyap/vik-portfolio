"use client"

import { useEffect, useRef } from "react"

export default function FloatingGeometrySimple() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create simple CSS-based floating elements instead of Three.js
    const elements = []

    for (let i = 0; i < 5; i++) {
      const element = document.createElement("div")
      element.className = `absolute w-4 h-4 bg-purple-400/20 rounded-full animate-pulse`
      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`
      element.style.animationDelay = `${Math.random() * 2}s`
      element.style.animationDuration = `${3 + Math.random() * 2}s`

      containerRef.current.appendChild(element)
      elements.push(element)
    }

    return () => {
      elements.forEach((el) => el.remove())
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
}
