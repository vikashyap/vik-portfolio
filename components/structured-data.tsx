"use client"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vikas Kashyap",
    "jobTitle": "Frontend Lead & Web3 Developer",
    "description": "Experienced Frontend Lead & Web3 Developer with 10+ years expertise in React.js, Next.js, TypeScript, Solana, Ethereum blockchain technologies.",
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
      "name": "Tenderize.me",
      "url": "https://tenderize.me"
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
      "experienceRequirements": "10+ years"
    },
    "sameAs": [
      "https://www.linkedin.com/in/vikashyap2020",
      "https://github.com/vikashyap"
    ],
    "availableLanguage": ["English"],
    "nationality": "Indian",
    "workLocation": "Berlin, Germany",
    "seeks": {
      "@type": "Demand",
      "description": "Frontend Lead and Web3 Developer opportunities"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
