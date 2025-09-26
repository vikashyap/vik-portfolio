"use client"

import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer'
import { resumeData } from '@/lib/resume-data'

// Register fonts for better typography
Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.woff2',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZhrib2Bg-4.woff2',
      fontWeight: 600,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZhrib2Bg-4.woff2',
      fontWeight: 700,
    },
  ],
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 25,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#8b5cf6',
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    color: '#1f2937',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: '#8b5cf6',
    marginBottom: 12,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  contactItem: {
    fontSize: 11,
    color: '#6b7280',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#1f2937',
    marginBottom: 12,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  summary: {
    fontSize: 12,
    color: '#374151',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 20,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  jobTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: '#1f2937',
  },
  jobPeriod: {
    fontSize: 11,
    color: '#6b7280',
    fontWeight: 600,
  },
  company: {
    fontSize: 12,
    color: '#8b5cf6',
    fontWeight: 600,
    marginBottom: 4,
  },
  jobDescription: {
    fontSize: 11,
    color: '#4b5563',
    marginBottom: 6,
    lineHeight: 1.5,
  },
  achievementsList: {
    paddingLeft: 12,
  },
  achievement: {
    fontSize: 11,
    color: '#374151',
    marginBottom: 3,
    lineHeight: 1.4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  skillCategory: {
    flex: 1,
    minWidth: '45%',
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: '#1f2937',
    marginBottom: 6,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillItem: {
    fontSize: 10,
    color: '#6b7280',
    backgroundColor: '#f3f4f6',
    padding: '3 8',
    borderRadius: 4,
    marginBottom: 4,
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontWeight: 600,
    color: '#1f2937',
  },
  institution: {
    fontSize: 10,
    color: '#8b5cf6',
    fontWeight: 600,
  },
  educationDetails: {
    fontSize: 9,
    color: '#6b7280',
    marginTop: 2,
  },
  twoColumnSection: {
    flexDirection: 'row',
    gap: 20,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
  },
  certificationItem: {
    marginBottom: 8,
  },
  certificationName: {
    fontSize: 10,
    fontWeight: 600,
    color: '#1f2937',
  },
  certificationIssuer: {
    fontSize: 9,
    color: '#8b5cf6',
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  languageName: {
    fontSize: 10,
    color: '#1f2937',
  },
  languageProficiency: {
    fontSize: 9,
    color: '#6b7280',
  },
  achievementItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 3,
    lineHeight: 1.3,
  },
})

const ResumePDF: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resumeData.personalInfo.name}</Text>
        <Text style={styles.title}>{resumeData.personalInfo.title}</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>{resumeData.personalInfo.location}</Text>
          <Text style={styles.contactItem}>{resumeData.personalInfo.phone}</Text>
          <Text style={styles.contactItem}>{resumeData.personalInfo.email}</Text>
          <Link src={resumeData.personalInfo.linkedin} style={styles.contactItem}>
            LinkedIn Profile
          </Link>
          <Link src={resumeData.personalInfo.github} style={styles.contactItem}>
            GitHub Profile
          </Link>
          <Link src={resumeData.personalInfo.website} style={styles.contactItem}>
            Portfolio Website
          </Link>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summary}>{resumeData.summary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        {resumeData.experience.map((job, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobPeriod}>{job.period}</Text>
            </View>
            <Text style={styles.company}>{job.company} • {job.location}</Text>
            <Text style={styles.jobDescription}>{job.description}</Text>
            <View style={styles.achievementsList}>
              {job.achievements.map((achievement, achievementIndex) => (
                <Text key={achievementIndex} style={styles.achievement}>
                  • {achievement}
                </Text>
              ))}
            </View>
            {job.technologies && (
              <View style={{ marginTop: 5 }}>
                <Text style={styles.skillCategoryTitle}>Technologies:</Text>
                <View style={styles.skillsList}>
                  {job.technologies.map((tech, techIndex) => (
                    <Text key={techIndex} style={styles.skillItem}>
                      {tech}
                    </Text>
                  ))}
                </View>
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsGrid}>
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <View key={category} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{category}</Text>
              <View style={styles.skillsList}>
                {skills.map((skill, skillIndex) => (
                  <Text key={skillIndex} style={styles.skillItem}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Languages & Achievements */}
      <View style={styles.twoColumnSection}>
        {/* Left Column - Languages */}
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {resumeData.languages.map((lang, index) => (
              <View key={index} style={styles.languageItem}>
                <Text style={styles.languageName}>{lang.language}</Text>
                <Text style={styles.languageProficiency}>{lang.proficiency}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Right Column - Key Achievements */}
        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Achievements</Text>
            {resumeData.achievements.map((achievement, index) => (
              <Text key={index} style={styles.achievementItem}>
                • {achievement}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

export default ResumePDF
