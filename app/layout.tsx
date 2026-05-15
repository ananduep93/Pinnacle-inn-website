import type { Metadata } from 'next'
import { Poppins, Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Pinnacle Inn | Luxury Nature Resort in Kakkadampoyil, Kerala',
  description: 'Experience tranquility at Pinnacle Inn, a premium nature resort nestled in the misty mountains of Kakkadampoyil, Kerala. Perfect for family getaways and peaceful retreats.',
  keywords: 'Pinnacle Inn, Kakkadampoyil resort, Kerala hill station, nature resort, mountain retreat, family vacation Kerala, weekend getaway',
  openGraph: {
    title: 'Pinnacle Inn | Luxury Nature Resort',
    description: 'Escape into nature at Pinnacle Inn - Your peaceful mountain retreat in Kerala',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
