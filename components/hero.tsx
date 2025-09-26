"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState, useEffect } from "react"
import DownloadResume from "./download-resume"

// Background images for the hero slider
const heroImages = [
  {
    src: "/main.JPG", // Main professional photo
    alt: "Vikas Kashyap - Professional Portrait",
    title: "Professional"
  },
  {
    src: "/IMG_658.jpeg", // Professional workspace photo
    alt: "Vikas at work - Frontend Development",
    title: "Coding Excellence"
  },
  {
    src: "/IMG_7010.jpeg", // Tech conference/meetup photo
    alt: "Vikas at Web3 Conference",
    title: "Web3 Innovation"
  },
  {
    src: "/IMG_4660.JPG", // New lifestyle photo
    alt: "Vikas Kashyap - Lifestyle",
    title: "Lifestyle"
  },
  {
    src: "/IMG_4676.JPG", // New adventure photo
    alt: "Vikas Kashyap - Adventure",
    title: "Adventure"
  },
  {
    src: "/IMG_469.JPG", // New casual photo
    alt: "Vikas Kashyap - Casual",
    title: "Casual Moments"
  }
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
            />
            {/* Multiple overlay gradients for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-900/40" />
          </motion.div>
        </AnimatePresence>

        {/* Image indicators */}
        <div className="absolute bottom-8 right-8 z-10 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
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
              className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed font-light"
            >
              Seasoned web development professional with a{" "}
              <span className="text-purple-300 font-medium">decade of industry experience</span>, 
              specializing in{" "}
              <span className="text-blue-300 font-medium">React.js, Next.js, TypeScript</span>, 
              and cutting-edge{" "}
              <span className="text-cyan-300 font-medium">Web3 technologies</span>. 
              Currently leading front-end development at{" "}
              <span className="text-purple-300 font-medium">Tenderize.me</span>.
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
              <a href="https://www.linkedin.com/in/vikashyap2020" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-2 border-blue-400/50 text-blue-300 hover:bg-blue-500 hover:text-white bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-400"
              asChild
            >
              <a href="https://github.com/vikashyap" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500 hover:text-white bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-cyan-400"
              asChild
            >
              <a href="mailto:kashyapvikas20@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
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

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

