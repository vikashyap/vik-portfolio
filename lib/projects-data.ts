export interface Project {
  title: string
  description: string
  tech: string[]
  href?: string
  accent: string // tailwind gradient classes for the card header
  placeholder?: boolean
}

// Placeholder entries can be freely edited/replaced with real case studies.
export const PROJECTS: Project[] = [
  {
    title: "Data Conversion Suite (DCS)",
    description:
      "Current work at Natuvion: full-stack product development on the DCS platform — nine integrated tools powering secure enterprise data transformations to SAP S/4HANA for 1,000+ customers.",
    tech: ["Next.js", "React", "TypeScript", "Node.js"],
    href: "https://www.natuvion.com",
    accent: "from-green-500 to-emerald-500",
  },
  {
    title: "Tenderize dApp",
    description:
      "Liquid staking protocol front-end: real-time staking flows, wallet integration, and on-chain data across Ethereum L2s.",
    tech: ["Next.js", "TypeScript", "Wagmi", "Viem", "React Query"],
    href: "https://www.tenderize.me",
    accent: "from-purple-500 to-blue-500",
  },
  {
    title: "3D Portfolio",
    description:
      "This site — an immersive scroll-driven 3D experience built with React Three Fiber, a custom camera rig, and zero-re-render scroll architecture.",
    tech: ["Next.js", "React Three Fiber", "Three.js", "Framer Motion"],
    href: "https://vik-portfolio-ecru.vercel.app",
    accent: "from-violet-500 to-pink-500",
  },
  {
    title: "Web3 Staking Dashboard",
    description:
      "Multi-chain staking analytics dashboard with live APR tracking, portfolio breakdowns, and transaction history.",
    tech: ["React", "Solana Web3.js", "Ethers.js", "Recharts"],
    accent: "from-cyan-500 to-blue-500",
    placeholder: true,
  },
  {
    title: "Event Ticketing Platform",
    description:
      "High-traffic ticketing UI work at Ticketmaster scale — interactive seat maps and 3D venue previews with Three.js.",
    tech: ["React", "Three.js", "Redux", "Node.js"],
    accent: "from-pink-500 to-orange-500",
    placeholder: true,
  },
]
