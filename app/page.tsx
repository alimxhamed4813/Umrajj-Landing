import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Destinations from "@/components/Destinations"
import Features from "@/components/Features"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <Destinations />
      <Features />
      <Footer />
    </div>
  )
}

