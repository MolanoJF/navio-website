"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Product", link: "/#features" },
    { name: "Pricing", link: "/pricing" },
    { name: "Resources", link: "#resources" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <ResizableNavbar className="top-0">
        {/* Desktop Navbar */}
        <NavBody>
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <Link href="/" className="text-2xl lg:text-3xl text-foreground tracking-tight hover:opacity-40 transition-opacity">
              NAVIO
            </Link>
          </div>

          {/* Navigation Items */}
          <NavItems items={navItems} onItemClick={closeMobileMenu} />

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            {/* <NavbarButton
              variant="secondary"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium"
            >
              Sign in
            </NavbarButton> */}
            <NavbarButton
              href="https://cal.com/navio-owdjpk/navio-demo"
              variant="primary"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium btn-3d"
            >
              Try Now
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav>
          <MobileNavHeader>
            {/* Logo */}
            <div className="flex-shrink-0 z-20">
              <Link href="/" className="text-2xl font-bold text-foreground tracking-tight hover:opacity-80 transition-opacity">
                NAVIO
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </MobileNavHeader>

          {/* Mobile Menu */}
          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={closeMobileMenu}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              {/* <Button variant="ghost" size="sm" onClick={closeMobileMenu}>
                Sign in
              </Button> */}
              <NavbarButton
                href="https://cal.com/navio-owdjpk/navio-demo"
                onClick={closeMobileMenu}
                className="w-full text-center"
              >
                Try Now
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  )
}
