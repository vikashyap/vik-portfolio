import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vikas Kashyap - Frontend Lead & Web3 Developer",
  description:
    "Portfolio of Vikas Kashyap - Seasoned web development professional with expertise in React.js, Next.js, TypeScript, and Web3 technologies.",
  generator: "v0.dev",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <div suppressHydrationWarning={true}>{children}</div>
      </body>
    </html>
  )
}
