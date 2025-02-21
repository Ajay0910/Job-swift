"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface A4PreviewProps {
  children: ReactNode
  className?: string
}

export function A4Preview({ children, className = "" }: A4PreviewProps) {
  // A4 dimensions in pixels at 96 DPI (8.27 × 11.69 inches)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`w-[793.6px] h-[1122.5px] bg-white shadow-lg mx-auto p-12 ${className}`}
      style={{
        pageBreakAfter: "always",
      }}
    >
      {children}
    </motion.div>
  )
}

