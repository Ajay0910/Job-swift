"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
  { href: "/", label: "Home" },
  { href: "/resume-generator", label: "Resume" },
  { href: "/job-recommendations", label: "Jobs" },
  { href: "/skill-gap-analysis", label: "Skills" },
  { href: "/interview-preparation", label: "Interview" },
  { href: "/auth", label: "Login" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                JobNest
              </Link>
            </div>
          </div>
          <div className="flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === link.href
                    ? "border-blue-500 text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" layoutId="underline" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

