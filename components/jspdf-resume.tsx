"use client"

import { jsPDF } from 'jspdf'
import { resumeData } from '@/lib/resume-data'

export const generateJsPDFResume = () => {
  const doc = new jsPDF()
  let yPosition = 20

  // Helper function to add text with automatic line wrapping
  const addText = (text: string, x: number, y: number, maxWidth?: number, fontSize?: number) => {
    if (fontSize) {
      doc.setFontSize(fontSize)
    }
    if (maxWidth) {
      const lines = doc.splitTextToSize(text, maxWidth)
      doc.text(lines, x, y)
      return y + (lines.length * (fontSize || 14) * 0.4)
    } else {
      doc.text(text, x, y)
      return y + ((fontSize || 14) * 0.4)
    }
  }

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number = 20) => {
    if (yPosition + requiredSpace > 280) {
      doc.addPage()
      yPosition = 20
    }
  }

  // Header
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  yPosition = addText(resumeData.personalInfo.name, 20, yPosition, undefined, 28)
  
  doc.setFontSize(18)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(128, 92, 246) // Purple color
  yPosition = addText(resumeData.personalInfo.title, 20, yPosition + 8, undefined, 18)
  
  // Contact Info
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  yPosition += 12
  yPosition = addText(`${resumeData.personalInfo.location} | ${resumeData.personalInfo.phone}`, 20, yPosition, undefined, 12)
  yPosition = addText(`${resumeData.personalInfo.email}`, 20, yPosition + 4, undefined, 12)
  yPosition = addText(`${resumeData.personalInfo.github} | ${resumeData.personalInfo.website}`, 20, yPosition + 4, undefined, 12)
  
  // Line separator
  yPosition += 10
  doc.setDrawColor(128, 92, 246)
  doc.line(20, yPosition, 190, yPosition)
  yPosition += 15

  // Professional Summary
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(0, 0, 0)
  yPosition = addText('PROFESSIONAL SUMMARY', 20, yPosition, undefined, 16)
  
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  yPosition += 6
  yPosition = addText(resumeData.summary, 20, yPosition, 170, 12)
  yPosition += 12

  // Work Experience
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  yPosition = addText('WORK EXPERIENCE', 20, yPosition, undefined, 16)
  yPosition += 6

  resumeData.experience.forEach((job, index) => {
    checkNewPage(40)

    // Job Title and Period
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    yPosition = addText(job.title, 20, yPosition, undefined, 14)
    
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(128, 92, 246)
    yPosition = addText(`${job.company} | ${job.location} | ${job.period}`, 20, yPosition + 3, undefined, 12)
    
    doc.setTextColor(0, 0, 0)
    yPosition += 4
    yPosition = addText(job.description, 20, yPosition, 170, 12)
    
    // Achievements
    job.achievements.forEach(achievement => {
      checkNewPage(15)
      yPosition += 3
      yPosition = addText(`• ${achievement}`, 25, yPosition, 165, 11)
    })
    
    // Technologies
    if (job.technologies) {
      yPosition += 4
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      yPosition = addText('Technologies:', 20, yPosition, undefined, 12)
      
      doc.setFontSize(11)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(128, 92, 246)
      yPosition = addText(job.technologies.join(', '), 20, yPosition + 3, 170, 11)
      doc.setTextColor(0, 0, 0)
    }
    
    yPosition += 8
  })

  // Skills
  checkNewPage(30)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  yPosition = addText('TECHNICAL SKILLS', 20, yPosition, undefined, 14)
  yPosition += 5

  Object.entries(resumeData.skills).forEach(([category, skills]) => {
    checkNewPage(20)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    yPosition = addText(`${category}:`, 20, yPosition, undefined, 11)
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    yPosition = addText(skills.join(', '), 20, yPosition + 2, 170, 10)
    yPosition += 5
  })


  // Languages
  checkNewPage(20)
  yPosition += 5
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  yPosition = addText('LANGUAGES', 20, yPosition, undefined, 16)
  yPosition += 6

  resumeData.languages.forEach(lang => {
    checkNewPage(10)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    yPosition = addText(`${lang.language}: ${lang.proficiency}`, 20, yPosition, undefined, 12)
    yPosition += 4
  })

  // Key Achievements
  checkNewPage(25)
  yPosition += 5
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  yPosition = addText('KEY ACHIEVEMENTS', 20, yPosition, undefined, 16)
  yPosition += 6

  resumeData.achievements.forEach(achievement => {
    checkNewPage(15)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    yPosition = addText(`• ${achievement}`, 20, yPosition, 170, 12)
    yPosition += 4
  })

  return doc
}
