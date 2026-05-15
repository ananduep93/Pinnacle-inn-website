"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
]

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/pinnacleinn' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/pinnacleinn' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/pinnacleinn' }
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-background/10"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#hero" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold">
                Pinnacle<span className="text-accent"> Inn</span>
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6">
              A luxury nature retreat nestled in the misty mountains of Kakkadampoyil, 
              offering peace, comfort, and unforgettable experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 text-background/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@pinnacleinn.com" className="flex items-start gap-3 text-background/70 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@pinnacleinn.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Kakkadampoyil, Thamarassery,<br />Kozhikode, Kerala 673573</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-background/70 mb-4">
              Subscribe to receive updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-background/10 border border-background/20 rounded-full px-4 py-3 pr-12 text-background placeholder:text-background/50 focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Send className="w-4 h-4 text-accent-foreground" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} Pinnacle Inn. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
