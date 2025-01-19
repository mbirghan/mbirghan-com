import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Moritz Birghan',
    default:
      'Moritz Birghan - Software Engineer, Founder, and Coffee Enthusiast',
  },
  description:
    'I’m Moritz, a passionate software engineer and startup founder based in Berlin. With over 8 years of professional experience, I thrive in team environments, love solving challenging problems, and am always eager to learn and improve.',
  alternates: {
    types: {
      // If we're on Vercel, use the VERCEL_URL environment variable
      // Otherwise, use localhost:3000 (for local development)
      // TODO: This should be set in some env variable properly
      'application/rss+xml': `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
