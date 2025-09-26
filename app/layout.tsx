import type React from "react"
import type { Metadata, Viewport } from "next"
import StructuredData from "@/components/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Vikas Kashyap - Frontend Lead & Web3 Developer | Berlin",
    template: "%s | Vikas Kashyap - Frontend Developer"
  },
  description: "Experienced Frontend Lead & Web3 Developer in Berlin with 10+ years expertise in React.js, Next.js, TypeScript, Solana, Ethereum. Currently leading frontend development at Tenderize.me. Available for new opportunities.",
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
    title: "Vikas Kashyap - Frontend Lead & Web3 Developer | Berlin",
    description: "Experienced Frontend Lead & Web3 Developer in Berlin with 10+ years expertise in React.js, Next.js, TypeScript, Solana, Ethereum. Available for new opportunities.",
    siteName: "Vikas Kashyap Portfolio",
    images: [
      {
        url: "https://vik-portfolio-ecru.vercel.app/main.JPG",
        width: 1200,
        height: 630,
        alt: "Vikas Kashyap - Frontend Lead & Web3 Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Kashyap - Frontend Lead & Web3 Developer",
    description: "Experienced Frontend Lead & Web3 Developer in Berlin with 10+ years expertise in React.js, Next.js, TypeScript, Web3 technologies.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body suppressHydrationWarning={true}>
        <div suppressHydrationWarning={true}>{children}</div>
      </body>
    </html>
  )
}
