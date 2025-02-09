"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface Destination {
  name: string
  image: string
}

const destinations: Destination[] = [
  { name: "Medina", image: "/medina.png" },
  { name: "Mount Arafat", image: "/mountarafat.jpg" },
  { name: "Masjid Nabawi", image: "/masjidnabawi.jpg" },
  { name: "Makkah", image: "/makkah.jpeg" },
]

export default function Destinations() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-green-800"
        >
          Where Umrah Takes You...
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            >
              <Image
                src={dest.image || "/placeholder.svg"}
                alt={dest.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
              >
                <h3 className="text-white text-2xl font-semibold">{dest.name}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
