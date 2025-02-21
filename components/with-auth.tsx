"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

// This is a mock function. Replace it with your actual authentication check.
const isAuthenticated = () => {
  return false // Always return false for now
}

export function withAuth(WrappedComponent: React.ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter()

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push("/auth")
      }
    }, [router])

    if (!isAuthenticated()) {
      return null // or a loading spinner
    }

    return <WrappedComponent {...props} />
  }
}

