import type { Metadata } from 'next'
import SupportClient from './SupportClient'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.launchos.co.in/support',
  },
}

export default function Page() {
  return <SupportClient />
}
