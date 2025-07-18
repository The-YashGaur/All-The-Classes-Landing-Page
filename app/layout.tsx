import type { Metadata } from 'next'
import "./globals.css"
import { ModernUIProvider } from "@/components/ui/modern-ui"
import { ReactNode } from 'react'

export const metadata: Readonly<Metadata> = {
  title: "The Classes",
  description: "Online Learning Platform",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <ModernUIProvider>
          {children}
        </ModernUIProvider>
      </body>
    </html>
  )
}
