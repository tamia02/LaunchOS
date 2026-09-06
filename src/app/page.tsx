import type { Metadata } from 'next'
import LandingPageClient from './LandingPageClient'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.launchos.co.in/',
  },
}

export default function Page() {
  return <LandingPageClient />
}
