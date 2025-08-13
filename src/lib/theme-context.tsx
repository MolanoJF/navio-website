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
      
      // Define transition boundaries
      const businessROIStart = windowHeight * 1.5 // BusinessROI section starts
      const callToActionStart = windowHeight * 5.5 // Call to Action section starts (extended to cover Dashboard + Integration)
      
      if (scrollY < businessROIStart) {
        // Before BusinessROI - dark theme
        setThemeProgress(0)
        setTheme('dark')
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else if (scrollY >= businessROIStart && scrollY < callToActionStart) {
        // BusinessROI to Call to Action - light theme
        setThemeProgress(1)
        setTheme('light')
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      } else {
        // After Call to Action - dark theme
        setThemeProgress(0)
        setTheme('dark')
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
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
