"use client"

import { Button } from "@/components/ui/button"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="my-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Brand Section */}
          <div>
            <div className="mb-2">
              <h3 className="text-4xl font-bold text-foreground tracking-tight mb-4">
                NAVIO
              </h3>
              <p className="text-foreground/70 text-base leading-relaxed max-w-md mb-6">
                The intelligent layer your app, helping users get guidance or automate entire workflows.
              </p>
              
              {/* Social Media Links - Moved here under brand description */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://x.com/Navio_bot" 
                  className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                  aria-label="X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="#linkedin" 
                  className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.21.805-1.21 1.972v3.644h-2.725v-7.34h2.725v1.467c.31-.562 1.043-1.064 2.348-1.064 2.527 0 2.987 1.662 2.987 3.817v4.188zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.351h3.564v11.101zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/#How" 
                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <a 
                    href="#Resources" 
                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/security" 
                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <a
                    href="https://cal.com/navio-owdjpk/navio-demo"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/legal/privacy"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/terms"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
