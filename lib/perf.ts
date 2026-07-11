export type PerfTier = "high" | "medium" | "low"

export function getPerfTier(): PerfTier {
  if (typeof window === "undefined") return "medium"

  const coarsePointer = window.matchMedia("(pointer: coarse)").matches
  const smallScreen = window.innerWidth < 768
  if (coarsePointer && smallScreen) return "low"

  const memory = (navigator as { deviceMemory?: number }).deviceMemory ?? 8
  const cores = navigator.hardwareConcurrency ?? 8
  if (memory >= 8 && cores >= 8) return "high"

  return "medium"
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export const PARTICLE_COUNTS: Record<PerfTier, number> = {
  high: 3000,
  medium: 1200,
  low: 400,
}
