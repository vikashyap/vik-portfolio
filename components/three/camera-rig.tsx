"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { easing } from "maath"
import { useScrollStore } from "@/lib/scroll-store"
import { SECTIONS } from "@/lib/sections"

const tmpPos = new THREE.Vector3()
const tmpLook = new THREE.Vector3()

function lerpKeyframe(path: number, out: { pos: THREE.Vector3; look: THREE.Vector3 }) {
  const clamped = Math.max(0, Math.min(SECTIONS.length - 1, path))
  const i = Math.floor(clamped)
  const j = Math.min(i + 1, SECTIONS.length - 1)
  const t = clamped - i
  const a = SECTIONS[i].camera
  const b = SECTIONS[j].camera
  out.pos.set(
    a.position[0] + (b.position[0] - a.position[0]) * t,
    a.position[1] + (b.position[1] - a.position[1]) * t,
    a.position[2] + (b.position[2] - a.position[2]) * t,
  )
  out.look.set(
    a.lookAt[0] + (b.lookAt[0] - a.lookAt[0]) * t,
    a.lookAt[1] + (b.lookAt[1] - a.lookAt[1]) * t,
    a.lookAt[2] + (b.lookAt[2] - a.lookAt[2]) * t,
  )
}

const target = { pos: tmpPos, look: tmpLook }
const smoothedLook = new THREE.Vector3(0, 0, 0)

export default function CameraRig() {
  const lookRef = useRef(smoothedLook)

  useFrame((state, delta) => {
    const { path, pointer } = useScrollStore.getState()
    lerpKeyframe(path, target)

    // Subtle pointer parallax layered on top of the scroll journey
    target.pos.x += pointer.x * 0.35
    target.pos.y += pointer.y * 0.25

    easing.damp3(state.camera.position, target.pos, 0.35, delta)
    easing.damp3(lookRef.current, target.look, 0.4, delta)
    state.camera.lookAt(lookRef.current)
  })

  return null
}
