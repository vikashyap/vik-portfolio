"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import {
  Zap,
  Gamepad2,
  Waves,
  Plane,
  Smartphone,
  Dumbbell,
  Coffee,
  Mountain,
} from "lucide-react"

const photos = [
  { src: "/main.JPG", alt: "Vikas Kashyap - Professional Photo", title: "Professional" },
  { src: "/IMG_658.jpeg", alt: "Vikas Kashyap - At Work", title: "Coding Excellence" },
  { src: "/IMG_7010.jpeg", alt: "Vikas Kashyap - Tech Events", title: "Tech Community" },
  { src: "/IMG_4660.JPG", alt: "Vikas Kashyap - Lifestyle", title: "Lifestyle Moments" },
  { src: "/IMG_4676.JPG", alt: "Vikas Kashyap - Adventure", title: "Adventure Time" },
  { src: "/IMG_469.JPG", alt: "Vikas Kashyap - Casual", title: "Casual Vibes" },
]

const hobbies = [
  { icon: Zap, label: "Kick Boxing / Muay Thai", color: "text-orange-400" },
  { icon: Gamepad2, label: "Gaming", color: "text-purple-400" },
  { icon: Waves, label: "Swimming", color: "text-cyan-400" },
  { icon: Plane, label: "Travel", color: "text-red-400" },
  { icon: Smartphone, label: "Cool Gadgets", color: "text-indigo-400" },
  { icon: Dumbbell, label: "Fitness", color: "text-green-400" },
  { icon: Coffee, label: "Coffee Culture", color: "text-amber-400" },
  { icon: Mountain, label: "Hiking", color: "text-teal-400" },
]

export default function BeyondCode() {
  const [selected, setSelected] = useState(0)

  return (
    <section id="beyond" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            Beyond Code
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Life in Berlin — and the things that keep me sharp away from the keyboard
          </p>
        </motion.div>

        {/* Featured photo + thumbnail strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
            <Image
              src={photos[selected].src}
              alt={photos[selected].alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <span className="text-white font-medium">{photos[selected].title}</span>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setSelected(i)}
                aria-label={`Show photo: ${photo.title}`}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  i === selected
                    ? "border-purple-400 scale-105 shadow-lg shadow-purple-500/25"
                    : "border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={photo.src} alt={photo.alt} fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Hobby chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 transition-colors"
            >
              <hobby.icon className={`w-4 h-4 ${hobby.color}`} />
              <span className="text-gray-200 text-sm font-medium">{hobby.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
