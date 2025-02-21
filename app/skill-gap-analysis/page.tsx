"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { withAuth } from "../../components/with-auth"

function SkillGapAnalysis() {
  const [file, setFile] = useState<File | null>(null)
  const [jobRole, setJobRole] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleAnalyze = async () => {
    if (!file || !jobRole) return

    setIsAnalyzing(true)
    // Simulating skill gap analysis
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsAnalyzing(false)
    alert("Skill gap analysis completed! This is a placeholder for the actual functionality.")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skill Gap Analysis</h1>
      <Card className="w-full max-w-md p-6">
        <div className="mb-4">
          <label htmlFor="resume-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Upload your resume
          </label>
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
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
        <Button onClick={handleAnalyze} disabled={!file || !jobRole || isAnalyzing} className="w-full">
          {isAnalyzing ? "Analyzing..." : "Submit"}
        </Button>
      </Card>
    </div>
  )
}

export default withAuth(SkillGapAnalysis)

