import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vikas Kashyap - Frontend Lead & Web3 Developer",
  description:
    "Portfolio of Vikas Kashyap - Seasoned web development professional with expertise in React.js, Next.js, TypeScript, and Web3 technologies.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
