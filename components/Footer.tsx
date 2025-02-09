"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Twitter } from "lucide-react"

const TikTokIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    stroke="none"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-7a8.16 8.16 0 004.65 1.49V7.14a4.79 4.79 0 01-1.2-.45z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <h4 className="text-2xl font-bold mb-4 hover:text-green-300">UMRAJJ</h4>
            </Link>
            <p className="mb-4">Simplify Your Travel To Umrah.</p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.instagram.com/umrajjofficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.1 }} 
                className="text-white hover:text-green-300"
              >
                <Instagram />
              </motion.a>
              <motion.a 
                href="https://x.com/Umrajj?mx=2" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.1 }} 
                className="text-white hover:text-green-300"
              >
                <Twitter />
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@umrajj" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.1 }} 
                className="text-white hover:text-green-300"
              >
                <TikTokIcon />
              </motion.a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Itineraries</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-green-300">
                  Bookings
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-300">
                  Personalized
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/subscribe" className="hover:text-green-300">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="hover:text-green-300">
                  Join us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <small>&copy; 2025 UMRAJJ. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}
