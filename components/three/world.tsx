"use client"

import type { PerfTier } from "@/lib/perf"
import ParticleField from "./shared/particle-field"
import HeroScene from "./scenes/hero-scene"
import AboutScene from "./scenes/about-scene"
import SkillsScene from "./scenes/skills-scene"
import ExperienceScene from "./scenes/experience-scene"
import ProjectsScene from "./scenes/projects-scene"
import BeyondScene from "./scenes/beyond-scene"
import ContactScene from "./scenes/contact-scene"

interface WorldProps {
  tier: PerfTier
}

export default function World({ tier }: WorldProps) {
  return (
    <>
      <fog attach="fog" args={["#0f172a", 8, 30]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 4, 6]} intensity={30} color="#8b5cf6" />
      <pointLight position={[-6, -3, 4]} intensity={18} color="#22d3ee" />
      <ParticleField tier={tier} />
      <HeroScene />
      <AboutScene />
      <SkillsScene />
      <ExperienceScene />
      <ProjectsScene />
      <BeyondScene />
      <ContactScene />
    </>
  )
}
