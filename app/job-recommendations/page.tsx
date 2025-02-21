"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { withAuth } from "../../components/with-auth"

function JobRecommendations() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)
    // Simulating file upload and job search
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsUploading(false)
    alert("Resume uploaded and jobs found! This is a placeholder for the actual functionality.")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Find Jobs</h1>
      <Card className="w-full max-w-md p-6">
        <div className="mb-4">
          <label htmlFor="resume-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Upload your resume to find jobs
          </label>
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <Button onClick={handleUpload} disabled={!file || isUploading} className="w-full">
          {isUploading ? "Uploading..." : "Find Jobs"}
        </Button>
      </Card>
    </div>
  )
}

export default withAuth(JobRecommendations)

