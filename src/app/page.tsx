import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import SolutionInAction from "@/components/SolutionInAction"
import BusinessROI from "@/components/BusinessROI"
import Dashboard from "@/components/Dashboard"
import CallToAction from "@/components/CallToAction"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SolutionInAction />
      <BusinessROI />
      <Dashboard />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}
