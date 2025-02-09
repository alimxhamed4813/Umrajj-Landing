"use client"
import { motion } from "framer-motion"
import { MessageSquare, Cloud, Users, Clock, BookOpen } from "lucide-react"
import Image from "next/image"

interface Feature {
  name: string
  icon: React.ElementType
  description: string
}

const features: Feature[] = [
  { name: "Group Messaging", icon: MessageSquare, description: "Stay connected with your travel group" },
  { name: "Weather Notification", icon: Cloud, description: "Get real-time weather updates" },
  { name: "Group Booking", icon: Users, description: "Easily book for your entire group" },
  { name: "Prayer Times", icon: Clock, description: "Never miss a prayer with accurate timings" },
  { name: "Dua and Facts!", icon: BookOpen, description: "Learn as you travel with our knowledge base" },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-green-800"
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 mb-4 rounded-2xl shadow-lg overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #2ecc71, #27ae60)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center bg-white bg-opacity-20">
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-600"
        >
          Many features will release as time progresses. Join our email list for updates!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/agencyapp.png"
            alt="UMRAJJ mobile app interface"
            width={300}
            height={600}
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
