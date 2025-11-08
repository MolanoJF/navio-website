"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

// Fade In with Slide Up - Scroll Triggered
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Fade In with Slide Up - Immediate (for Hero)
export function FadeInImmediate({
  children,
  delay = 0,
  duration = 0.6,
  blur = false,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  blur?: boolean
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        ...(blur && { filter: "blur(10px)" })
      }}
      animate={{
        opacity: 1,
        y: 0,
        ...(blur && { filter: "blur(0px)" })
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Container for staggered children animations
export function FadeInStagger({
  children,
  staggerDelay = 0.15,
  duration = 0.6,
}: {
  children: ReactNode
  staggerDelay?: number
  duration?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }}
    >
      {children}
    </motion.div>
  )
}

// Child item for staggered animations
export function StaggerItem({
  children,
  duration = 0.6,
}: {
  children: ReactNode
  duration?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Variants for custom usage
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}
