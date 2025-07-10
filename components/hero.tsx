"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            VIKAS KASHYAP
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-purple-400 font-light mb-8"
          >
            Front-End Lead & Web3 Developer
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Seasoned web development professional with a decade of industry experience, specializing in React.js,
            Next.js, TypeScript, and cutting-edge Web3 technologies. Currently leading front-end development at
            Tenderize.me.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
            >
              Explore My Work
            </Button>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                asChild
              >
                <a href="https://www.linkedin.com/in/vikashyap2020" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                asChild
              >
                <a href="mailto:kashyapvikas20@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={scrollToAbout}
            >
              <ArrowDown className="h-6 w-6 text-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
