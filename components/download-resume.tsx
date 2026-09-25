"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"

interface DownloadResumeProps {
  className?: string
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  setTimeout(() => {
    link.remove()
    URL.revokeObjectURL(url)
  }, 100)
}

export default function DownloadResume({ className = "" }: DownloadResumeProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [failed, setFailed] = useState(false)

  const handleDownload = async () => {
    setIsGenerating(true)
    setFailed(false)
    try {
      try {
        // Loaded on demand so the PDF libraries stay out of the initial bundle
        const [{ pdf }, { default: ResumePDF }] = await Promise.all([
          import("@react-pdf/renderer"),
          import("./resume-pdf"),
        ])
        const blob = await pdf(<ResumePDF />).toBlob()
        if (blob && blob.size > 0) {
          triggerDownload(blob, "Vikas_Kashyap_CV.pdf")
          return
        }
      } catch (reactPdfError) {
        console.warn("react-pdf failed, falling back to jsPDF:", reactPdfError)
      }
      const { generateJsPDFResume } = await import("./jspdf-resume")
      generateJsPDFResume().save("Vikas_Kashyap_CV.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      setFailed(true)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button type="button" onClick={handleDownload} disabled={isGenerating} className={className}>
      {isGenerating ? <Loader2 className="animate-spin" aria-hidden /> : <Download aria-hidden />}
      {isGenerating ? "Preparing CV" : failed ? "Retry CV download" : "Download CV"}
    </button>
  )
}
