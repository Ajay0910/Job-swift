"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export function Button({ children, onClick, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 ease-in-out"
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-purple-600 hover:bg-purple-700",
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

