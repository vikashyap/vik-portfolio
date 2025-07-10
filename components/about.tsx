"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              As a seasoned web development professional with a decade of industry experience and over a year
              specializing in Web3 technologies, I lead front-end development at Tenderize.me. My expertise encompasses
              crafting sleek, responsive web interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I excel in agile methodologies, collaborating seamlessly with IT and business teams to deliver innovative
              solutions. My diverse background spans multiple platforms—including web, mobile, and widgets—enabling me
              to approach challenges with a fresh perspective and develop cutting-edge decentralized applications
              (dApps).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>Berlin, Germany</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+49 176 29804709</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>kashyapvikas20@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="h-5 w-5 text-purple-400" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-purple-400 pl-4">
                    <h4 className="text-lg font-semibold text-white">Bachelor of Technology</h4>
                    <p className="text-purple-400">Punjab Technical University</p>
                    <p className="text-gray-400">2011</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 mt-8">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">English</span>
                    <span className="text-purple-400">Fluent</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
