import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Adaptiv - AI Fitness Coach That Adapts to Real Life',
  description: 'Adaptiv is an AI-powered fitness coach that automatically adjusts your workout and nutrition plans when life gets in the way. Get personalized plans that evolve with you.',
  keywords: ['AI fitness coach', 'adaptive workout plans', 'personalized nutrition', 'fitness app', 'smart fitness tracking'],
  authors: [{ name: 'Adaptiv' }],
  openGraph: {
    title: 'Adaptiv - AI Fitness Coach That Adapts to Real Life',
    description: 'Fitness plans that automatically adjust when life happens. AI-powered coaching that works with your schedule, not against it.',
    type: 'website',
    siteName: 'Adaptiv',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adaptiv - AI Fitness Coach That Adapts to Real Life',
    description: 'Fitness plans that automatically adjust when life happens. AI-powered coaching that works with your schedule, not against it.',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
