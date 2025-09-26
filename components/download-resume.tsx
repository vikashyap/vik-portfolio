"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, FileText, Loader2 } from 'lucide-react'
import { pdf } from '@react-pdf/renderer'
import ResumePDF from './resume-pdf'
import { generateJsPDFResume } from './jspdf-resume'

interface DownloadResumeProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  className?: string
}

const DownloadResume: React.FC<DownloadResumeProps> = ({ 
  variant = 'default', 
  size = 'default',
  className = '' 
}) => {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    try {
      setIsGenerating(true)
      console.log('Starting PDF generation...')
      
      // Check if we're in the browser
      if (typeof window === 'undefined') {
        console.error('PDF generation only works in browser environment')
        return
      }
      
      try {
        // Try react-pdf first
        console.log('Trying react-pdf...')
        const pdfInstance = pdf(<ResumePDF />)
        const blob = await pdfInstance.toBlob()
        
        if (blob && blob.size > 0) {
          console.log('React-PDF blob generated successfully:', blob)
          
          // Create download link
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = 'Vikas_Kashyap_Resume.pdf'
          link.style.display = 'none'
          
          // Trigger download
          document.body.appendChild(link)
          console.log('Triggering download...')
          link.click()
          
          // Cleanup with a small delay
          setTimeout(() => {
            if (document.body.contains(link)) {
              document.body.removeChild(link)
            }
            URL.revokeObjectURL(url)
            console.log('Cleanup completed')
          }, 100)
          
          return
        }
      } catch (reactPdfError) {
        console.warn('React-PDF failed, trying jsPDF fallback:', reactPdfError)
      }
      
      // Fallback to jsPDF
      console.log('Using jsPDF fallback...')
      const doc = generateJsPDFResume()
      doc.save('Vikas_Kashyap_Resume.pdf')
      console.log('jsPDF download triggered')
      
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert(`Error generating PDF: ${error.message}. Please try again or contact support.`)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      variant={variant}
      size={size}
      className={className}
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </>
      )}
    </Button>
  )
}

export default DownloadResume
