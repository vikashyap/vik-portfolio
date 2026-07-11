"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Languages, 
  Code2, 
  Rocket, 
  Users, 
  Trophy,
  Star,
  Globe,
  Building2
} from "lucide-react"

const achievements = [
  { icon: Trophy, label: "13+ Years", description: "Industry Experience" },
  { icon: Code2, label: "50+ Projects", description: "Successfully Delivered" },
  { icon: Users, label: "15+ Teams", description: "Led & Collaborated" },
  { icon: Star, label: "Web3 & 3D", description: "dApps to Three.js" }
]

const techStack = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", 
  "Web3", "Solana", "Ethereum", "Node.js"
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-purple-400/30 text-purple-300 bg-purple-500/10">
            <Globe className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into exceptional digital experiences with cutting-edge technology
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Profile & Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            
            {/* Profile Card */}
            <Card className="border-slate-700/50 bg-slate-900/50 backdrop-blur-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 ring-2 ring-purple-400/30">
                    <AvatarImage src="/main.JPG" alt="Vikas Kashyap" />
                    <AvatarFallback className="bg-purple-500/20 text-purple-300 text-lg font-bold">VK</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl text-white">
                      Vikas Kashyap
                    </CardTitle>
                    <p className="text-purple-300 font-medium">Front-End Lead & Full-Stack Engineer</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-400">Natuvion GmbH</span>
                      <Separator orientation="vertical" className="h-4 bg-slate-600" />
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-400">Berlin, Germany</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-purple-400" />
                      My Journey
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      For over <span className="text-purple-300 font-medium">13 years</span> I&apos;ve been crafting exceptional
                      front-end experiences — from Angular SPAs and 3D interfaces with Three.js to modern{" "}
                      <span className="text-blue-300 font-medium">React and Next.js</span> architectures. Along the way I&apos;ve led
                      teams, built <span className="text-blue-300 font-medium">Web3 dApps</span>, and gone full-stack with Node.js —
                      today I build data-transformation software at <span className="text-green-300 font-medium">Natuvion</span> in Berlin.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      What I Do
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      I excel in <span className="text-emerald-300 font-medium">agile methodologies</span>, collaborating seamlessly 
                      with cross-functional teams to deliver innovative solutions. My diverse background spans multiple platforms web, 
                      mobile, and widgets enabling me to approach challenges with fresh perspectives and develop cutting-edge 
                      <span className="text-cyan-300 font-medium">, decentralized applications (dApps)</span>.
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-emerald-400" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, index) => (
                        <Badge 
                          key={tech}
                          variant="secondary" 
                          className="bg-slate-800/50 text-gray-300 border-slate-600/50 hover:bg-slate-700/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-slate-700/50 bg-slate-900/30 backdrop-blur-xl hover:bg-slate-900/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xl font-bold text-white">{achievement.label}</p>
                          <p className="text-sm text-gray-400">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-slate-700/50 bg-slate-900/50 backdrop-blur-xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* Contact Items */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-purple-400/50 transition-colors group">
                    <MapPin className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                      <p className="text-white font-medium">Berlin, Germany</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-emerald-400/50 transition-colors group">
                    <Phone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                      <p className="text-white font-medium">+49 176 29804709</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-blue-400/50 transition-colors group">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                      <p className="text-white font-medium text-sm">kashyapvikas20@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-orange-400/50 transition-colors group">
                    <Calendar className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Experience</p>
                      <p className="text-white font-medium">13+ Years</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-cyan-400/50 transition-colors group">
                    <Languages className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Language</p>
                      <p className="text-white font-medium">English - Fluent</p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-700/50" />
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20">
                    <p className="text-2xl font-bold text-white">10+</p>
                    <p className="text-xs text-gray-400">Years</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20">
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-xs text-gray-400">Projects</p>
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