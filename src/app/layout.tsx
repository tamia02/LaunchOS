import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.launchos.co.in'),
  alternates: {
    canonical: 'https://www.launchos.co.in/',
  },
  title: {
    default: 'launchOS — AI Startup Engine for Founders',
    template: '%s | launchOS'
  },
  description: 'Turn your startup idea into a complete launch plan in 2 minutes. Niche analysis, market validation, MVP planning, pricing strategy, and outreach — powered by AI. Built for Indian founders.',
  keywords: [
    'startup tools india',
    'ai co-founder',
    'startup idea validation',
    'how to validate startup idea',
    'startup niche finder',
    'mvp planning tool',
    'startup pricing strategy',
    'yc application helper',
    'founder tools',
    'startup launch plan',
    'idea to startup',
    'startup for beginners india',
    'how to find first customers',
    'startup validation ai',
    'build startup india',
    'solo founder tools',
    'startup market research',
    'how to start a startup india',
    'startup idea analyzer',
    'ai startup planner'
  ],
  authors: [{ name: 'launchOS' }],
  creator: 'launchOS',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.launchos.co.in',
    siteName: 'launchOS',
    title: 'launchOS — AI Startup Engine for Founders',
    description: 'Turn your startup idea into a complete launch plan in 2 minutes. Used by 2,847 founders.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'launchOS — AI Startup Engine'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'launchOS — AI Startup Engine for Founders',
    description: 'Turn your startup idea into a complete launch plan in 2 minutes.',
    images: ['/og-image.png'],
    creator: '@launchOS'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_KEY_HERE',
  },
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} dark antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground font-body min-h-screen">
        <Providers>
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
