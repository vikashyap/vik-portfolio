export const CALENDLY_URL = "https://calendly.com/kashyapvikas20/lets-know-each-other"
export const EMAIL = "kashyapvikas20@gmail.com"
export const LINKEDIN_URL = "https://www.linkedin.com/in/vikashyap2020"
export const GITHUB_URL = "https://github.com/vikashyap"

export interface Practice {
  title: string
  body: string
}

// What the AI enablement work covers. Worded as current practice, not measured results.
export const PRACTICES: Practice[] = [
  {
    title: "Give the agent context it can trust",
    body: "Rules files, architecture notes and conventions that live in the repo, so generated code matches your patterns instead of the internet's average.",
  },
  {
    title: "Turn your standards into skills and hooks",
    body: "Reusable workflows for the work your team repeats: a pre-flight before new code, an audit before every PR, descriptions written from the diff.",
  },
  {
    title: "Review AI output like a senior would",
    body: "What models get wrong in front-end code: accessibility, state and effects, type holes, design-system drift. And how to catch it before a human reviewer has to.",
  },
  {
    title: "Know when not to use it",
    body: "Where AI saves a day, where it costs one, and how to keep the team's own judgement sharp while the tools do more of the typing.",
  },
]

export interface Format {
  name: string
  detail: string
}

export const FORMATS: Format[] = [
  { name: "Setup review", detail: "I read your repo and AI setup, then hand back a written list of fixes." },
  { name: "Team session", detail: "A working session on your codebase, not slides. Your team leaves with rules and skills in place." },
  { name: "Pairing", detail: "Ongoing sessions with one or two engineers who will carry the practice forward." },
]

export interface Tool {
  name: string
  body: string
}

// AI tooling Vikas has built and uses in daily work.
export const TOOLING: Tool[] = [
  { name: "lets-begin", body: "Pre-flight before new code: finds the sibling files, shared components and API shapes that should govern the change." },
  { name: "pre-pr-bulletproofing", body: "Audits changed files for architecture drift, API-shape mismatches and review risks before the PR opens." },
  { name: "pr-description-generator", body: "Writes a structured PR description from the actual diff." },
  { name: "understand-pr", body: "Summarises someone else's PR in plain English and lists the questions worth asking the author." },
  { name: "comment-cleanup", body: "Strips obvious and stale comments from the branch, keeps the ones that carry intent." },
  { name: "create-followup", body: "Captures what a reviewer deferred to 'later' so it does not disappear after merge." },
]

export interface Project {
  path: string
  title: string
  description: string
  tech: string[]
  href?: string
}

export const PROJECTS: Project[] = [
  {
    path: "natuvion/data-conversion-suite",
    title: "Data Conversion Suite",
    description:
      "Full-stack product work on Natuvion's DCS: nine integrated tools for secure enterprise data transformations to SAP S/4HANA, used by 1,000+ customers.",
    tech: ["Next.js", "React", "TypeScript", "Node.js"],
    href: "https://www.natuvion.com",
  },
  {
    path: "tenderize/staking-dapp",
    title: "Tenderize dApp",
    description:
      "Liquid staking front-end: real-time staking flows, wallet integration and on-chain data across Ethereum L2s.",
    tech: ["Next.js", "TypeScript", "Wagmi", "Viem", "React Query"],
    href: "https://www.tenderize.me",
  },
  {
    path: "snubes/platform",
    title: "Snubes Platform",
    description:
      "Contact-centre outsourcing marketplace built as micro front-ends in a Lerna/NX monorepo, with hybrid SSR/CSR Next.js apps, a Storybook design system and GraphQL CMS content.",
    tech: ["Next.js", "Gatsby", "TypeScript", "GraphQL", "Storybook"],
    href: "https://www.snubes.com",
  },
  {
    path: "ticketmaster/3d-venues",
    title: "Ticketmaster 3D Venues",
    description:
      "Interactive 3D venue layouts with Three.js inside a high-traffic React SPA, with SEO-friendly page generation.",
    tech: ["React", "Three.js", "Webpack", "Python"],
  },
]

export interface Role {
  title: string
  company: string
  logo?: string
  location: string
  start: string
  end: string
  summary: string
  highlights: string[]
  tech: string[]
}

export const ROLES: Role[] = [
  {
    title: "Senior Software Engineer",
    company: "Natuvion",
    logo: "/logos/natuvion.png",
    location: "Berlin",
    start: "Jun 2026",
    end: "Present",
    summary:
      "Product development on the Data Conversion Suite, the platform behind secure enterprise data transformations to SAP S/4HANA.",
    highlights: [
      "Enterprise UIs with Next.js, React and TypeScript",
      "Tooling for large-scale data migration and transformation workflows",
      "Building and using AI workflows in daily product work",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Front End Lead",
    company: "Tenderize",
    logo: "/logos/tenderize.png",
    location: "Berlin",
    start: "Oct 2023",
    end: "Apr 2026",
    summary:
      "Led user-facing flows and built the Node.js/PostgreSQL services behind them, aggregating on-chain and off-chain data.",
    highlights: [
      "Staking flows with Next.js, React and TypeScript",
      "Smart-contract integration with viem, ethers and wagmi",
      "The Graph indexing for real-time rewards and analytics",
      "Strongly-typed SDKs for ecosystem partners",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Wagmi", "Viem", "The Graph"],
  },
  {
    title: "Front End Lead Developer",
    company: "Snubes",
    logo: "/logos/snubes.png",
    location: "Berlin",
    start: "Jul 2018",
    end: "Sep 2023",
    summary:
      "Architected hybrid SSR/CSR applications and led micro front-end development in a monorepo.",
    highlights: [
      "Micro front-ends with Lerna and NX",
      "Design system in Storybook",
      "Testing strategy with Jest and Cypress",
      "GraphQL-driven CMS content",
    ],
    tech: ["React", "Next.js", "Gatsby", "TypeScript", "GraphQL", "Storybook"],
  },
  {
    title: "Senior Frontend Developer",
    company: "Ticketmaster",
    logo: "/logos/ticketmaster.png",
    location: "Gurgaon",
    start: "May 2017",
    end: "Jul 2018",
    summary: "Interactive 3D web applications with Three.js inside React SPAs, plus Node.js and Express services.",
    highlights: [
      "3D venue layouts with Three.js",
      "SEO-friendly page generation with Python",
      "Ran sprint ceremonies for the team",
    ],
    tech: ["Three.js", "React", "Node.js", "Webpack", "Python"],
  },
  {
    title: "Frontend Developer",
    company: "Jade Global",
    logo: "/logos/jade-global.png",
    location: "Noida",
    start: "Jan 2015",
    end: "Apr 2017",
    summary: "PWAs with offline support and real-time updates for Sapient's client Jato Flex Software.",
    highlights: ["Offline-first PWA", "Real-time data with WebSockets and Web Workers"],
    tech: ["Angular 1.x", "C#", "SQL", "WebSockets"],
  },
  {
    title: "Frontend Developer",
    company: "Tata Consultancy Services",
    logo: "/logos/tcs.png",
    location: "Gurgaon",
    start: "May 2014",
    end: "Jan 2015",
    summary: "Responsive Angular.js SPA with rich data visualisation for McKinsey & Company.",
    highlights: ["Charts with Highcharts and D3"],
    tech: ["Angular.js", "Sass", "D3.js"],
  },
  {
    title: "Frontend Developer",
    company: "Grange Management Services",
    location: "New Delhi",
    start: "Jan 2013",
    end: "Apr 2014",
    summary: "CMS websites with C#/ASP.NET and SQL Server, including XML and JSON web services.",
    highlights: [],
    tech: ["JavaScript", "jQuery", "C#", "ASP.NET"],
  },
]

export interface StackGroup {
  name: string
  items: string[]
}

export const STACK: StackGroup[] = [
  { name: "Front-end", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { name: "State & data", items: ["React Query", "Redux", "Zustand", "RxJS", "GraphQL"] },
  { name: "AI workflow", items: ["Claude Code", "Skills & hooks", "Review agents", "Prompt design"] },
  { name: "Quality", items: ["Jest", "Cypress", "Storybook", "Design systems"] },
  { name: "Web3", items: ["Wagmi", "Viem", "Ethers.js", "The Graph", "Solana Web3.js"] },
  { name: "Platform", items: ["Node.js", "PostgreSQL", "NX", "Lerna", "Webpack", "Three.js"] },
]
