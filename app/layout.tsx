import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vikas Kashyap - Frontend Lead & Web3 Developer",
  description:
    "Portfolio of Vikas Kashyap - Seasoned web development professional with expertise in React.js, Next.js, TypeScript, and Web3 technologies.",
  generator: "v0.dev",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true}>
        <div suppressHydrationWarning={true}>{children}</div>
      </body>
    </html>
  )
}
