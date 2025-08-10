"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  themeProgress: number // 0 = dark, 1 = light
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [themeProgress, setThemeProgress] = useState(0) // 0 = dark, 1 = light

  useEffect(() => {
    // Set initial theme to dark
    document.documentElement.classList.add('dark')
    
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Define section boundaries more precisely
      const heroEnd = windowHeight * 0.8 // Hero section ends at 80% of viewport height
      const businessROIStart = windowHeight * 0.8
      const businessROIEnd = windowHeight * 2.2 // BusinessROI section ends around 2.2 viewport heights
      const testimonialsStart = windowHeight * 2.2
      const callToActionStart = windowHeight * 3.2 // Call to Action section starts around 3.2 viewport heights
      
      if (scrollY < heroEnd) {
        // Hero section - dark theme
        setThemeProgress(0)
        setTheme('dark')
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else if (scrollY >= businessROIStart && scrollY < businessROIEnd) {
        // BusinessROI section - transition from dark to light
        const progress = (scrollY - businessROIStart) / (businessROIEnd - businessROIStart)
        setThemeProgress(progress)
        if (progress > 0.5) {
          setTheme('light')
          document.documentElement.classList.remove('dark')
          document.documentElement.classList.add('light')
        } else {
          setTheme('dark')
          document.documentElement.classList.add('dark')
          document.documentElement.classList.remove('light')
        }
      } else if (scrollY >= testimonialsStart && scrollY < callToActionStart) {
        // Testimonials section - maintain light theme (no transition)
        setThemeProgress(1)
        setTheme('light')
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      } else if (scrollY >= callToActionStart) {
        // Call to Action section and beyond - maintain light theme
        setThemeProgress(1)
        setTheme('light')
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeProgress }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
