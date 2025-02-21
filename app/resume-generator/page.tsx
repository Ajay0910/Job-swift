"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { A4Preview } from "../../components/a4-preview"
import { withAuth } from "../../components/with-auth"

function ResumeGenerator() {
  const [resumePrompt, setResumePrompt] = useState("")
  const [coverLetterJobTitle, setCoverLetterJobTitle] = useState("")
  const [coverLetterCompany, setCoverLetterCompany] = useState("")
  const [generatedResume, setGeneratedResume] = useState("")
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState("")
  const [isGeneratingResume, setIsGeneratingResume] = useState(false)
  const [isGeneratingCoverLetter, setIsGeneratingCoverLetter] = useState(false)

  const handleGenerateResume = async () => {
    if (!resumePrompt) return
    setIsGeneratingResume(true)

    try {
      // Simulating AI API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setGeneratedResume(`
        <h1 class="text-2xl font-bold mb-4">John Doe</h1>
        <p class="text-gray-600 mb-4">Software Engineer</p>
        
        <h2 class="text-xl font-semibold mb-2">Professional Summary</h2>
        <p class="mb-4">Experienced software engineer with expertise in React, Next.js, and TypeScript...</p>
        
        <h2 class="text-xl font-semibold mb-2">Experience</h2>
        <div class="mb-4">
          <h3 class="font-semibold">Senior Software Engineer - Tech Corp</h3>
          <p class="text-gray-600">2020 - Present</p>
          <ul class="list-disc pl-5 mt-2">
            <li>Led development of multiple high-impact projects</li>
            <li>Mentored junior developers and improved team productivity</li>
          </ul>
        </div>
        
        <h2 class="text-xl font-semibold mb-2">Education</h2>
        <div class="mb-4">
          <h3 class="font-semibold">BS in Computer Science</h3>
          <p class="text-gray-600">University of Technology, 2016-2020</p>
        </div>
      `)
    } catch (error) {
      console.error("Error generating resume:", error)
    } finally {
      setIsGeneratingResume(false)
    }
  }

  const handleGenerateCoverLetter = async () => {
    if (!coverLetterJobTitle || !coverLetterCompany) return
    setIsGeneratingCoverLetter(true)

    try {
      // Simulating AI API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setGeneratedCoverLetter(`
        <div class="mb-4">
          <p>Dear Hiring Manager,</p>
        </div>
        
        <div class="mb-4">
          <p>I am writing to express my strong interest in the ${coverLetterJobTitle} position at ${coverLetterCompany}. With my background in software development and passion for creating innovative solutions, I believe I would be a valuable addition to your team.</p>
        </div>
        
        <div class="mb-4">
          <p>Throughout my career, I have demonstrated expertise in developing scalable applications using modern technologies. I am particularly drawn to ${coverLetterCompany}'s commitment to innovation and its impact in the tech industry.</p>
        </div>
        
        <div class="mb-4">
          <p>I look forward to discussing how my skills and experience align with your needs.</p>
        </div>
        
        <div>
          <p>Best regards,</p>
          <p>John Doe</p>
        </div>
      `)
    } catch (error) {
      console.error("Error generating cover letter:", error)
    } finally {
      setIsGeneratingCoverLetter(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Resume & Cover Letter Generator</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Resume Generator</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Enter your career details and preferences
              </label>
              <textarea
                className="w-full h-40 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                placeholder="Describe your experience, skills, and the type of resume you want..."
                value={resumePrompt}
                onChange={(e) => setResumePrompt(e.target.value)}
              />
            </div>
            <Button onClick={handleGenerateResume} disabled={isGeneratingResume || !resumePrompt} className="w-full">
              {isGeneratingResume ? "Generating..." : "Generate Resume"}
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Cover Letter Generator</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Title</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                placeholder="e.g., Software Engineer"
                value={coverLetterJobTitle}
                onChange={(e) => setCoverLetterJobTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                placeholder="e.g., Tech Corp"
                value={coverLetterCompany}
                onChange={(e) => setCoverLetterCompany(e.target.value)}
              />
            </div>
            <Button
              onClick={handleGenerateCoverLetter}
              disabled={isGeneratingCoverLetter || !coverLetterJobTitle || !coverLetterCompany}
              className="w-full"
            >
              {isGeneratingCoverLetter ? "Generating..." : "Generate Cover Letter"}
            </Button>
          </div>
        </Card>
      </div>

      {(generatedResume || generatedCoverLetter) && (
        <div className="space-y-8 overflow-x-auto pb-8">
          {generatedResume && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Generated Resume</h2>
              <div className="max-w-full overflow-x-auto">
                <A4Preview>
                  <div
                    dangerouslySetInnerHTML={{ __html: generatedResume }}
                    className="prose prose-sm max-w-none dark:prose-invert"
                  />
                </A4Preview>
              </div>
            </div>
          )}

          {generatedCoverLetter && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Generated Cover Letter</h2>
              <div className="max-w-full overflow-x-auto">
                <A4Preview>
                  <div
                    dangerouslySetInnerHTML={{ __html: generatedCoverLetter }}
                    className="prose prose-sm max-w-none dark:prose-invert"
                  />
                </A4Preview>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default withAuth(ResumeGenerator)

