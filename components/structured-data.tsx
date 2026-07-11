"use client"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vikas Kashyap",
    "jobTitle": "Senior Software Engineer",
    "description": "Front-End Lead & Full-Stack Engineer with 13+ years expertise in React.js, Next.js, and TypeScript — from Web3 dApps to enterprise data platforms.",
    "url": "https://vik-portfolio-ecru.vercel.app",
    "image": "https://vik-portfolio-ecru.vercel.app/main.JPG",
    "email": "kashyapvikas20@gmail.com",
    "telephone": "+49-176-29804709",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "Germany"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Natuvion GmbH",
      "url": "https://www.natuvion.com"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Punjab Technical University"
    },
    "knowsAbout": [
      "React.js",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "Web3",
      "Blockchain",
      "Solana",
      "Ethereum",
      "Frontend Development",
      "dApp Development",
      "Tailwind CSS",
      "Node.js"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Berlin, Germany"
      },
      "skills": [
        "React.js Development",
        "Web3 Integration", 
        "TypeScript Programming",
        "Frontend Architecture",
        "Blockchain Development",
        "Team Leadership"
      ],
      "experienceRequirements": "13+ years"
    },
    "sameAs": [
      "https://www.linkedin.com/in/vikashyap2020",
      "https://github.com/vikashyap"
    ],
    "availableLanguage": ["English"],
    "nationality": "Indian",
    "workLocation": "Berlin, Germany"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
