import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Navigation } from "../components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "JobNest: AI-Powered Job Application Platform",
  description:
    "Create your perfect resume, discover real-time job listings, analyze skill gaps, and prepare for interviews—all in one place!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 min-h-screen`}
      >
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'