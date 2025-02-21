"use client"

import { withAuth } from "../../components/with-auth"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"

function InterviewPreparation() {
  const [jobRole, setJobRole] = useState("")
  const [questions, setQuestions] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateQuestions = async () => {
    if (!jobRole) return

    setIsGenerating(true)
    // Simulating API call to generate interview questions
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setQuestions([
      "Can you describe your experience with React and Next.js?",
      "How do you approach state management in large-scale applications?",
      "What strategies do you use for optimizing website performance?",
      "Can you explain the concept of server-side rendering and its benefits?",
      "How do you handle error boundaries in React applications?",
    ])
    setIsGenerating(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Interview Preparation</h1>
      <Card className="w-full max-w-2xl p-6">
        <div className="mb-4">
          <label htmlFor="job-role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enter the job role
          </label>
          <input
            id="job-role"
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            placeholder="e.g., Frontend Developer"
          />
        </div>
        <Button onClick={handleGenerateQuestions} disabled={!jobRole || isGenerating} className="w-full mb-4">
          {isGenerating ? "Generating Questions..." : "Prepare Interview Questions"}
        </Button>
        {questions.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl font-semibold mb-4">Interview Questions:</h2>
            <ul className="list-disc pl-5 space-y-2">
              {questions.map((question, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {question}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </Card>
    </div>
  )
}

export default withAuth(InterviewPreparation)

