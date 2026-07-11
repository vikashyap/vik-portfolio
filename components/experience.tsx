"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full-Stack Software Engineer",
    company: "Natuvion",
    logo: "/logos/natuvion.png",
    location: "Berlin",
    period: "Jun 2026 - Present",
    description:
      "Product development at Natuvion — \"the digital moving company\" for enterprise data. Building full-stack features for the Data Conversion Suite (DCS), the platform powering secure data transformations to SAP S/4HANA and other modern platforms for 1,000+ enterprise customers.",
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS"],
    highlights: [
      "Full-stack product development on the Data Conversion Suite (DCS) platform",
      "Enterprise-grade UIs with Next.js, React, and TypeScript",
      "Building tooling for large-scale data migration and transformation workflows",
      "Collaborating in an agile, cross-functional product team",
    ],
  },
  {
    title: "Front End Lead",
    company: "Tenderize",
    logo: "/logos/tenderize.png",
    location: "Berlin",
    period: "Oct 2023 - May 2026",
    description:
      "Leading front-end development for Web3 applications, specializing in Ethereum and Solana blockchain integrations. Developing advanced dApps with high performance and user-friendly interfaces.",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Wagmi", "Viem", "Solana Web3.js", "The Graph"],
    highlights: [
      "Ethereum Integration: Token management and smart contract interactions",
      "Solana Integration: On-chain program interactions and state management",
      "Data Indexing: Real-time TVL and transaction volume analytics",
      "Performance Optimization: Code splitting and lazy loading implementation",
    ],
  },
  {
    title: "Front End Lead Developer",
    company: "Snubes",
    logo: "/logos/snubes.png",
    location: "Berlin Area",
    period: "Jul 2018 - Sep 2023",
    description:
      "Architected and developed scalable hybrid applications using Next.js and React.js, leveraging both SSR and CSR for optimal performance. Led micro front-end development with Monorepo architecture.",
    technologies: ["React.js", "Next.js", "Gatsby", "TypeScript", "GraphQL", "Jest", "Cypress", "Storybook"],
    highlights: [
      "Micro front-ends with Monorepo architecture using Lerna & NX",
      "Design system implementation with Storybook",
      "Comprehensive testing strategies with Jest & Cypress",
      "GraphQL integration for CMS data fetching",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Ticketmaster",
    logo: "/logos/ticketmaster.png",
    location: "Gurgaon",
    period: "May 2017 - Jul 2018",
    description:
      "Specialized in building interactive 3D web applications using Three.js within React SPAs. Streamlined build processes and led Agile development practices.",
    technologies: ["Three.js", "React.js", "JavaScript", "FlowType", "Webpack", "Python"],
    highlights: [
      "Immersive 3D layouts with Three.js in React SPA",
      "SEO-friendly page generation with Python scripts",
      "Agile development leadership with sprint meetings",
      "Performance optimization with Webpack",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Jade Global",
    logo: "/logos/jade-global.png",
    location: "Noida",
    period: "Jan 2015 - Apr 2017",
    description:
      "Full-stack development for Sapient's client Jato Flex Software. Developed PWAs with offline functionality and real-time data updates using WebSockets.",
    technologies: ["Angular 1.x", "jQuery", "C#", "SQL", "WebSockets", "PWA"],
    highlights: [
      "Progressive Web App development with offline functionality",
      "Real-time data updates with WebSockets and Web Workers",
      "High-performance database query optimization",
      "Build automation with Grunt, Bower, and Yeoman",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/90 border border-white/20 p-2 flex items-center justify-center overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white">{exp.title}</CardTitle>
                        <p className="text-xl text-purple-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-purple-400/20 text-purple-300 border-purple-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
