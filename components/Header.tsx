"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-6 h-6 flex flex-col justify-around">
    <span
      className={`bg-green-600 h-0.5 w-full transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
    />
    <span className={`bg-green-600 h-0.5 w-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
    <span
      className={`bg-green-600 h-0.5 w-full transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
    />
  </div>
)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const menuItems = ["Home", "Features", "Subscribe"]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="w-6 h-6" />
          <Link href="/">
            <motion.h1 whileHover={{ scale: 1.05 }} className="text-3xl font-bold text-green-700 cursor-pointer">
              UMRAJJ
            </motion.h1>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-green-600 hover:text-green-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg"
          >
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/" className="block px-4 py-2 text-green-600 hover:bg-green-50" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <button 
                  onClick={scrollToFeatures}
                  className="w-full text-left px-4 py-2 text-green-600 hover:bg-green-50"
                >
                  Features
                </button>
              </li>
              <li>
                <Link href="/subscribe" className="block px-4 py-2 text-green-600 hover:bg-green-50" onClick={toggleMenu}>
                  Subscribe
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
