import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import What from "@/components/What"
import Why from "@/components/Why"
import How from "@/components/How"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <What />
      <Why />
      <How />
      <CallToAction />
      <Footer />
    </main>
  )
}
