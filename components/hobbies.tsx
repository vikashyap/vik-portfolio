"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Zap, 
  Gamepad2, 
  Waves, 
  Plane, 
  Smartphone, 
  Dumbbell,
  Coffee,
  Mountain
} from "lucide-react"

const hobbies = [
  {
    icon: Zap,
    title: "Kick Boxing / Muay Thai",
    description: "Training in martial arts for discipline, fitness, and mental strength.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Exploring virtual worlds and staying updated with the latest gaming tech.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Waves,
    title: "Swimming",
    description: "Enjoying the water and maintaining cardiovascular fitness through swimming.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Exploring new cultures, cuisines, and experiences across different countries.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Smartphone,
    title: "Cool Gadgets",
    description: "Passionate about discovering and trying out the latest tech innovations.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Maintaining physical and mental health through regular workouts and yoga.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Coffee,
    title: "Coffee Culture",
    description: "Exploring different brewing methods and discovering specialty coffee shops.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Mountain,
    title: "Hiking",
    description: "Connecting with nature and exploring scenic trails around Berlin and beyond.",
    color: "from-teal-500 to-green-500"
  }
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">Hobbies & Interests</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond coding, I'm passionate about exploring life's diverse experiences and maintaining a balanced lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 h-full hover:bg-white/10 transition-all duration-300 group-hover:border-white/20">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${hobby.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <hobby.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {hobby.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {hobby.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
