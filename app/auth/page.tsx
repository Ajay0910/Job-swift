"use client"

import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"

export default function Auth() {
  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    console.log("Google login clicked")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="w-full max-w-md p-6">
          <h1 className="text-3xl font-bold mb-8 text-center">Login to JobNest</h1>
          <Button variant="secondary" className="w-full" onClick={handleGoogleLogin}>
            Continue with Google
          </Button>
        </Card>
      </motion.div>
    </div>
  )
}

