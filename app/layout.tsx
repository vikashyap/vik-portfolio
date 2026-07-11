import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import StructuredData from "@/components/structured-data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Vikas Kashyap - Front-End Lead & Full-Stack Engineer | Berlin",
    template: "%s | Vikas Kashyap - Frontend Developer"
  },
  description: "Front-End Lead & Full-Stack Engineer in Berlin with 13+ years expertise in React.js, Next.js, and TypeScript — from Web3 dApps to enterprise platforms. Currently building data-transformation products at Natuvion GmbH.",
  keywords: [
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
    title: "Vikas Kashyap - Front-End Lead & Full-Stack Engineer | Berlin",
    description: "Front-End Lead & Full-Stack Engineer in Berlin with 13+ years expertise in React.js, Next.js, and TypeScript — from Web3 dApps to enterprise platforms.",
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
    title: "Vikas Kashyap - Front-End Lead & Full-Stack Engineer",
    description: "Front-End Lead & Full-Stack Engineer in Berlin with 13+ years expertise in React.js, Next.js, and TypeScript.",
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
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body suppressHydrationWarning={true}>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-md"
        >
          Skip to content
        </a>
        <div suppressHydrationWarning={true}>{children}</div>
      </body>
    </html>
  )
}
