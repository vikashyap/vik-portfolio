// Shared helpers for section scenes.

export function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v))
}

export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / (edge1 - edge0))
  return t * t * (3 - 2 * t)
}

// How "present" a scene is for a given section progress p (0..1).
// Ramps in over [fadeInStart, fadeInEnd], out over [fadeOutStart, fadeOutEnd].
export function presence(
  p: number,
  fadeInStart = 0.05,
  fadeInEnd = 0.3,
  fadeOutStart = 0.7,
  fadeOutEnd = 0.95,
): number {
  return smoothstep(fadeInStart, fadeInEnd, p) * (1 - smoothstep(fadeOutStart, fadeOutEnd, p))
}

export const PALETTE = {
  violet: "#8b5cf6",
  violetLight: "#a78bfa",
  violetDeep: "#6d28d9",
  cyan: "#22d3ee",
  pink: "#ec4899",
} as const
