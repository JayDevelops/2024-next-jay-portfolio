import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import React from "react"
import dynamic from "next/dynamic"

const inter = Inter({ subsets: ['latin'] })
const DynamicNavigation: React.ComponentType<{}> = dynamic(() => import("@/components/Navigation/Navigation"))

export const metadata: Metadata = {
  title: {
    default: 'Jesus Perez Developer Portfolio',
    template: `%s | Jesus Perez Developer Portfolio`
  },
  description:
      'Unlock the potential of your business needs with Jesus Perez Arias, ' +
      'a seasoned professional software engineer with extensive expertise in crafting exceptional FullStack and Mobile Applications. ' +
      'Jesus is open for hire in full-time or freelance opportunities, with his ' +
      'rich background spanning three years, Jesus specializes in full-stack technologies, including React, React Native, Next.js, TypeScript, MongoDB, and Node.js. ' +
      'Known for strong communication skills in technology topics and educator, Jesus is the ideal person for bringing your visionary projects to life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className} suppressHydrationWarning>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <DynamicNavigation />
        <main className="flex min-h-screen flex-col items-center justify-between my-4 px-12 md:px-24 lg:px-32">
          {children}
        </main>
      </ThemeProvider>
    </body>
    </html>
  )
}
