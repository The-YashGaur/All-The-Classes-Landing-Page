import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ButtonProps } from '@/components/ui/button'

interface ModernUIProviderProps {
  children: ReactNode
}

export function ModernUIProvider({ children }: ModernUIProviderProps) {
  return (
    <>
      {children}
      <script src="/modern-enhancements.js" defer></script>
    </>
  )
}

interface ModernCardProps {
  children: ReactNode
  className?: string
}

export function ModernCard({ children, className = '' }: ModernCardProps) {
  return (
    <Card className={cn(
      "modern-card",
      "backdrop-blur-sm bg-white/80",
      "transition-all duration-300 hover:shadow-xl",
      className
    )}>
      {children}
    </Card>
  )
}

interface ModernButtonProps extends ButtonProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline" | "ghost" | "link"
  className?: string
  children: ReactNode
}

export function ModernButton({ size = "md", variant = "default", className, children, ...props }: ModernButtonProps) {
  return (
    <Button
      size={size}
      variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        className,
        "relative group overflow-hidden"
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  )
}

interface ModernSectionProps {
  children: React.ReactNode
  className?: string
  backgroundImage?: string
}

export function ModernSection({ children, className = '', backgroundImage }: ModernSectionProps) {
  return (
    <div className={`parallax ${className}`} style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}>
      {children}
    </div>
  )
}

interface ModernSkeletonProps {
  className?: string
}

export function ModernSkeleton({ className = '' }: ModernSkeletonProps) {
  return (
    <div className={`skeleton ${className}`} />
  )
}
