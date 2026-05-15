"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Experience', href: '#experience' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#hero" className="flex items-center gap-2">
              <div className="relative">
                <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}>
                  Pinnacle
                </span>
                <span className={`font-serif text-2xl md:text-3xl font-light ${
                  isScrolled ? 'text-primary' : 'text-accent'
                }`}>
                  {' '}Inn
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <Link
                href="#booking"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-lg pt-24 px-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-medium text-foreground hover:text-accent transition-colors block py-2"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-6"
                >
                  <Link
                    href="#booking"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full text-lg font-semibold transition-all"
                  >
                    Book Your Stay
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
