"use client"

import { useEffect } from "react"
import { useScrollStore } from "@/lib/scroll-store"
import { SECTIONS } from "@/lib/sections"

interface SectionRect {
  id: string
  top: number
  height: number
}

// Measures the DOM sections and writes normalized scroll state into the
// zustand store every animation frame the scroll position changes.
// Renders nothing; the 3D layer reads the store inside useFrame.
export default function ScrollTracker() {
  useEffect(() => {
    let rects: SectionRect[] = []
    let lastY = -1
    let rafId = 0

    const measure = () => {
      rects = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return null
        const top = el.getBoundingClientRect().top + window.scrollY
        return { id, top, height: el.offsetHeight }
      }).filter((r): r is SectionRect => r !== null)
      lastY = -1 // force recompute
    }

    const update = () => {
      rafId = requestAnimationFrame(update)
      const y = window.scrollY
      if (y === lastY || rects.length === 0) return
      lastY = y

      const vh = window.innerHeight
      const docHeight = document.documentElement.scrollHeight - vh
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0

      const sectionProgress: Record<string, number> = {}
      for (const r of rects) {
        // 0 when section top reaches viewport bottom, 1 when its bottom passes viewport top
        const p = (y + vh - r.top) / (r.height + vh)
        sectionProgress[r.id] = Math.min(1, Math.max(0, p))
      }

      // Continuous path position: which section is centered + how far through it
      const centerY = y + vh / 2
      let path = 0
      let activeSection = rects[0].id
      for (let i = 0; i < rects.length; i++) {
        const r = rects[i]
        if (centerY >= r.top) {
          const frac = Math.min(1, (centerY - r.top) / r.height)
          path = i + frac
          activeSection = r.id
        }
      }
      // Map "progress through section i" onto "travel from keyframe i to i+1",
      // easing so the camera rests at each keyframe around the section center.
      const idx = Math.floor(path)
      const frac = path - idx
      const eased = frac < 0.5 ? 0 : (frac - 0.5) * 2
      const pathEased = Math.min(SECTIONS.length - 1, idx + eased * eased * (3 - 2 * eased))

      useScrollStore.setState({ progress, path: pathEased, activeSection, sectionProgress })
    }

    const onPointerMove = (e: PointerEvent) => {
      useScrollStore.setState({
        pointer: {
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -((e.clientY / window.innerHeight) * 2 - 1),
        },
      })
    }

    measure()
    rafId = requestAnimationFrame(update)
    window.addEventListener("resize", measure, { passive: true })
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    // Re-measure after images/fonts settle layout
    const settleTimer = setTimeout(measure, 1500)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(settleTimer)
      window.removeEventListener("resize", measure)
      window.removeEventListener("pointermove", onPointerMove)
    }
  }, [])

  return null
}
