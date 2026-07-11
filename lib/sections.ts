export interface SectionDef {
  id: string
  label: string
  // Camera keyframe when this section is centered in the viewport
  camera: {
    position: [number, number, number]
    lookAt: [number, number, number]
  }
}

// Ordered registry — must match the DOM section order in app/page.tsx.
// The camera rig interpolates between consecutive keyframes as you scroll.
export const SECTIONS: SectionDef[] = [
  {
    id: "home",
    label: "Home",
    camera: { position: [0, 0, 7], lookAt: [0, 0, 0] },
  },
  {
    id: "about",
    label: "About",
    camera: { position: [2.5, 0.6, 5.5], lookAt: [1.2, 0, -1] },
  },
  {
    id: "skills",
    label: "Skills",
    camera: { position: [-1.5, -0.5, 6], lookAt: [-0.5, 0, -1] },
  },
  {
    id: "experience",
    label: "Experience",
    camera: { position: [0, 1.2, 5], lookAt: [0, 0, -2] },
  },
  {
    id: "projects",
    label: "Projects",
    camera: { position: [-2.5, 0.4, 5.5], lookAt: [-1, 0, -1.5] },
  },
  {
    id: "beyond",
    label: "Beyond",
    camera: { position: [1.8, -0.8, 6], lookAt: [0.8, 0, -1] },
  },
  {
    id: "contact",
    label: "Contact",
    camera: { position: [0, 0, 4.5], lookAt: [0, 0, -3] },
  },
]

export const SECTION_IDS = SECTIONS.map((s) => s.id)
