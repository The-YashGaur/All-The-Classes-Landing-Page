import type { Metadata } from 'next'
import "./globals.css"
import { ReactNode } from 'react'
import { Providers } from "@/components/providers"

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
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Providers>
          <main className="flex-grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
