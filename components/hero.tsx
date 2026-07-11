"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import DownloadResume from "./download-resume"

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (!element) return
    if (window.__lenis) {
      window.__lenis.scrollTo(element, { offset: -64 })
    } else {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft scrim so text stays readable over the 3D scene */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.55)_0%,rgba(15,23,42,0.15)_60%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 min-h-screen flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border-purple-400/30 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new opportunities
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              VIKAS
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              KASHYAP
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl font-light mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              Front-End Lead
            </span>
            <span className="text-white"> & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Web3 Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Seasoned web development professional with a{" "}
            <span className="text-purple-300 font-medium">decade of industry experience</span>,
            specializing in{" "}
            <span className="text-blue-300 font-medium">React.js, Next.js, TypeScript</span>,
            and cutting-edge{" "}
            <span className="text-cyan-300 font-medium">Web3 technologies</span>.
            Currently building enterprise data-transformation products at{" "}
            <span className="text-purple-300 font-medium">Natuvion</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore My Work
            </Button>

            <DownloadResume
              variant="outline"
              size="lg"
              className="border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500 hover:text-white bg-black/20 backdrop-blur-sm px-10 py-4 rounded-full text-lg font-medium shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:border-purple-400"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500 hover:text-white bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-purple-400"
              asChild
            >
              <a href="https://www.linkedin.com/in/vikashyap2020" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-2 border-blue-400/50 text-blue-300 hover:bg-blue-500 hover:text-white bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-400"
              asChild
            >
              <a href="https://github.com/vikashyap" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500 hover:text-white bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-cyan-400"
              asChild
            >
              <a href="mailto:kashyapvikas20@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>

          {/* Book an Appointment Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center mt-6"
          >
            <Button
              onClick={() => window.open('https://calendly.com/kashyapvikas20/lets-know-each-other', '_blank', 'noopener,noreferrer')}
              size="lg"
              className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 hover:from-orange-500/30 hover:to-amber-500/30 text-white px-8 py-3 rounded-full text-base font-medium shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/50"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book an Appointment
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="cursor-pointer group"
            onClick={scrollToAbout}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                Scroll to explore
              </span>
              <ArrowDown className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
