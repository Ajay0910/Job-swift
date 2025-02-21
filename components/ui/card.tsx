"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 backdrop-filter backdrop-blur-lg bg-opacity-30 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

