"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

// Personal photos from your collection
const personalPhotos = [
  {
    src: "/main.JPG", // Main professional photo
    alt: "Vikas Kashyap - Professional Photo",
    title: "Professional",
    description: "Leading frontend development with passion and expertise"
  },
  {
    src: "/IMG_658.jpeg", // Professional workspace photo
    alt: "Vikas Kashyap - At Work",
    title: "Coding Excellence",
    description: "Crafting innovative solutions with cutting-edge technologies"
  },
  {
    src: "/IMG_7010.jpeg", // Tech event/conference photo
    alt: "Vikas Kashyap - Tech Events",
    title: "Tech Community",
    description: "Engaging with the Web3 and frontend development community"
  },
  {
    src: "/IMG_4660.JPG", // New lifestyle photo
    alt: "Vikas Kashyap - Lifestyle",
    title: "Lifestyle Moments",
    description: "Capturing life's beautiful moments and experiences"
  },
  {
    src: "/IMG_4676.JPG", // New adventure photo
    alt: "Vikas Kashyap - Adventure",
    title: "Adventure Time",
    description: "Exploring new places and embracing adventure"
  },
  {
    src: "/IMG_469.JPG", // New casual photo
    alt: "Vikas Kashyap - Casual",
    title: "Casual Vibes",
    description: "Relaxed moments and everyday life in Berlin"
  }
]

export default function PictureSlider() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A glimpse into my life beyond code - from professional moments to personal adventures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Image Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={personalPhotos[selectedImage].src}
                    alt={personalPhotos[selectedImage].alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-2 bg-purple-500/80 text-white">
                      {personalPhotos[selectedImage].title}
                    </Badge>
                    <p className="text-white text-sm">
                      {personalPhotos[selectedImage].description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Carousel Thumbnails */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Personal Moments</h3>
              
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {personalPhotos.map((photo, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(index)}
                        className="cursor-pointer"
                      >
                        <Card className={`bg-white/5 backdrop-blur-md border-white/10 overflow-hidden transition-all duration-300 ${
                          selectedImage === index 
                            ? 'ring-2 ring-purple-400 bg-white/10' 
                            : 'hover:bg-white/10 hover:border-white/20'
                        }`}>
                          <CardContent className="p-0">
                            <div className="relative aspect-square overflow-hidden">
                              <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
                <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
              </Carousel>

              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Click on any thumbnail to view the full image
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
