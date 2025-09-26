"use client"

import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666666',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
  },
})

const SimpleResumePDF: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Vikas Kashyap</Text>
      <Text style={styles.subtitle}>Frontend Lead & Web3 Developer</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.text}>Berlin, Germany</Text>
        <Text style={styles.text}>+49 176 29804709</Text>
        <Text style={styles.text}>kashyapvikas20@gmail.com</Text>
        <Text style={styles.text}>https://vik-portfolio-ecru.vercel.app</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>
          Seasoned web development professional with a decade of industry experience, 
          specializing in React.js, Next.js, TypeScript, and cutting-edge Web3 technologies. 
          Currently leading front-end development at Tenderize.me.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Position</Text>
        <Text style={styles.text}>Frontend Lead at Tenderize.me (2023 - Present)</Text>
        <Text style={styles.text}>
          Leading frontend development for Web3 staking platform, architecting scalable 
          React applications with TypeScript and modern blockchain integrations.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Skills</Text>
        <Text style={styles.text}>
          React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, 
          Web3, Solidity, Ethereum, Solana, Node.js, Git, Docker
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.text}>10+ years in web development</Text>
        <Text style={styles.text}>1+ years specializing in Web3 technologies</Text>
        <Text style={styles.text}>50+ projects delivered successfully</Text>
      </View>
    </Page>
  </Document>
)

export default SimpleResumePDF
