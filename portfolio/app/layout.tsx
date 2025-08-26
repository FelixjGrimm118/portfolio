import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Felix Grimm - Portfolio | Software Developer",
  description:
    "Personal portfolio showcasing projects, experience, and education in software development. View my latest work and professional journey.",
  keywords: ["portfolio", "software developer", "web development", "projects", "experience"],
  authors: [{ name: "Felix Grimm" }],
  creator: "Felix Grimm",
  openGraph: {
    title: "Felix Grimm - Portfolio",
    description: "Personal portfolio showcasing projects, experience, and education in software development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Grimm - Portfolio",
    description: "Personal portfolio showcasing projects, experience, and education in software development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
