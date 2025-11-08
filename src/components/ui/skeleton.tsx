import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "motion/react"

interface SkeletonProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  delay?: number
}

function Skeleton({
  className,
  delay = 0,
  ...props
}: SkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
