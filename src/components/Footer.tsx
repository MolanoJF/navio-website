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
              <h3 className="text-4xl font-bold text-foreground tracking-tight mb-4 flex items-center gap-2">
                <img src="/Navio-L.svg" alt="Navio Logo" className="w-12 h-12" />
                Navio
              </h3>
              <p className="text-foreground/70 text-base leading-relaxed max-w-md mb-6">
                The intelligent layer your app, helping users get guidance or automate entire workflows.
              </p>
              
              {/* Social Media Links*/}
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
                  href="https://www.linkedin.com/company/naviobot"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
