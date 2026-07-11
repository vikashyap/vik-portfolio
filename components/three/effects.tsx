"use client"

import { EffectComposer, Bloom } from "@react-three/postprocessing"

// Mounted lazily (React.lazy) and only on the high perf tier, keeping
// postprocessing out of the bundle for everyone else.
export default function Effects() {
  return (
    <EffectComposer>
      <Bloom intensity={0.6} luminanceThreshold={0.35} luminanceSmoothing={0.9} mipmapBlur />
    </EffectComposer>
  )
}
