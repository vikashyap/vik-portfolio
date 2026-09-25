import type React from "react"
import type { Metadata, Viewport } from "next"
import { Schibsted_Grotesk, Red_Hat_Mono } from "next/font/google"
import StructuredData from "@/components/structured-data"
import "./globals.css"

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const mono = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Vikas Kashyap · AI enablement for front-end teams · Berlin",
    template: "%s | Vikas Kashyap"
  },
  description: "Vikas Kashyap helps front-end teams use AI well: repo context, skills and hooks, and review that catches what the model misses. Front-End Lead with 13+ years in React, Next.js and TypeScript, based in Berlin.",
  keywords: [
    "AI for front-end teams",
    "AI coding workflow",
    "Claude Code",
    "AI enablement",
    "Frontend Developer",
    "Web3 Developer", 
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Blockchain Developer",
    "Solana Developer",
    "Ethereum Developer",
    "Berlin Developer",
    "Frontend Lead",
    "JavaScript Developer",
    "Tailwind CSS",
    "dApp Developer",
    "Web Developer Berlin",
    "Hire Frontend Developer",
    "React.js Expert",
    "Web3 Expert",
    "Vikas Kashyap"
  ],
  authors: [{ name: "Vikas Kashyap", url: "https://vik-portfolio-ecru.vercel.app" }],
  creator: "Vikas Kashyap",
  publisher: "Vikas Kashyap",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vik-portfolio-ecru.vercel.app",
    title: "Vikas Kashyap · AI enablement for front-end teams",
    description: "I help front-end teams use AI well. Front-End Lead with 13+ years in React, Next.js and TypeScript, based in Berlin.",
    siteName: "Vikas Kashyap Portfolio",
    images: [
      {
        url: "https://vik-portfolio-ecru.vercel.app/main.JPG",
        width: 1200,
        height: 630,
        alt: "Vikas Kashyap - Front-End Lead & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Kashyap · AI enablement for front-end teams",
    description: "I help front-end teams use AI well. Front-End Lead with 13+ years in React, Next.js and TypeScript.",
    images: ["https://vik-portfolio-ecru.vercel.app/main.JPG"],
    creator: "@vikashyap",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/main.JPG", sizes: "32x32", type: "image/jpeg" },
    ],
    apple: [
      { url: "/main.JPG", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body suppressHydrationWarning={true}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ink focus:text-canvas focus:rounded-md"
        >
          Skip to content
        </a>
        <div suppressHydrationWarning={true}>{children}</div>
      </body>
    </html>
  )
}
