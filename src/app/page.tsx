import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import SolutionInAction from "@/components/SolutionInAction"
import BusinessROI from "@/components/BusinessROI"
import Dashboard from "@/components/Dashboard"
import CallToAction from "@/components/CallToAction"
import Integration from "@/components/Integration"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <SolutionInAction />
      <BusinessROI />
      <Dashboard />
      <Integration />
      <CallToAction />
      <Footer />
    </main>
  )
}
