import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Rooms } from '@/components/rooms'
import { Experience } from '@/components/experience'
import { Gallery } from '@/components/gallery'
import { Blog } from '@/components/blog'
import { Testimonials } from '@/components/testimonials'
import { Location } from '@/components/location'
import { BookingCTA } from '@/components/booking-cta'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Experience />
      <Gallery />
      <Blog />
      <Testimonials />
      <Location />
      <BookingCTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
