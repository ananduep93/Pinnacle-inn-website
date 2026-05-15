"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MessageCircle, Calendar } from 'lucide-react'

export function BookingCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="booking" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="Mountain View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Limited Availability
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Reserve Your Stay Today
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Don&apos;t miss the opportunity to experience the magic of Kakkadampoyil. 
            Book your mountain retreat now and create memories that last a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hi, I would like to book a stay at Pinnacle Inn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <MessageCircle className="w-6 h-6 text-green-600" />
              Book via WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/30 border border-white/30"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
          </div>

          {/* Extra Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Flexible Check-in</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span>Best Price Guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
