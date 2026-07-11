import { create } from "zustand"

interface ScrollState {
  // 0..1 across the whole page
  progress: number
  // Continuous position in section-space: 2.4 = 40% of the way from
  // section index 2 to section index 3. Drives the camera path.
  path: number
  activeSection: string
  // Per-section progress 0..1: 0 = section top hits viewport bottom,
  // 1 = section bottom leaves viewport top. Drives scene morphs.
  sectionProgress: Record<string, number>
  // Normalized pointer, -1..1 both axes
  pointer: { x: number; y: number }
}

// Written transiently by ScrollTracker via setState; the 3D layer reads it
// with useScrollStore.getState() inside useFrame — no React re-renders.
export const useScrollStore = create<ScrollState>(() => ({
  progress: 0,
  path: 0,
  activeSection: "home",
  sectionProgress: {},
  pointer: { x: 0, y: 0 },
}))
