"use client"

import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [text, setText] = useState("")
  const fullText =
    "Create your perfect resume, discover real-time job listings, analyze skill gaps, and prepare for interviews—all in one place!"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        JobNest: AI-Powered Job Application Simplified
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-center mb-8 text-gray-700 dark:text-gray-300 h-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {text}
      </motion.p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link href="/resume-generator">
          <Button variant="primary">📄 Generate Resume</Button>
        </Link>
        <Link href="/job-recommendations">
          <Button variant="secondary">🔍 Find Jobs</Button>
        </Link>
      </div>
    </div>
  )
}

