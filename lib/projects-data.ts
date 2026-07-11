export interface Project {
  title: string
  description: string
  tech: string[]
  href?: string
  accent: string // tailwind gradient classes for the card header
}

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
    title: "Snubes Platform",
    description:
      "Contact-center outsourcing marketplace built as micro front-ends in a Lerna/NX monorepo — hybrid SSR/CSR Next.js apps, a Storybook design system, and GraphQL-driven CMS content.",
    tech: ["Next.js", "Gatsby", "TypeScript", "GraphQL", "Storybook"],
    href: "https://www.snubes.com",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Ticketmaster 3D Venue Experience",
    description:
      "Interactive 3D venue layouts with Three.js inside a high-traffic React SPA — immersive seat exploration at Ticketmaster scale, with SEO-friendly page generation.",
    tech: ["React", "Three.js", "Webpack", "Python"],
    accent: "from-pink-500 to-orange-500",
  },
]
