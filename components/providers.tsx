"use client"

import { ModernUIProvider } from "@/components/ui/modern-ui"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModernUIProvider>
      {children}
    </ModernUIProvider>
  )
}
