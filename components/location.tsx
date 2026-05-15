"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Navigation, Car, Clock, Phone, Mail } from 'lucide-react'

const nearbyAttractions = [
  { name: 'Kakkadampoyil Viewpoint', distance: '2 km' },
  { name: 'Janakikkadu Forest', distance: '5 km' },
  { name: 'Thusharagiri Waterfalls', distance: '18 km' },
  { name: 'Kozhikode Beach', distance: '45 km' },
  { name: 'Wayanad Wildlife Sanctuary', distance: '55 km' }
]

const directions = [
  { from: 'Kozhikode Airport', duration: '1.5 hours', distance: '50 km' },
  { from: 'Kozhikode Railway Station', duration: '1.5 hours', distance: '48 km' },
  { from: 'Kozhikode Bus Stand', duration: '1.5 hours', distance: '47 km' }
]

export function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Find Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Location & Contact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nestled in the heart of Kakkadampoyil, easily accessible yet beautifully secluded.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31264.52399875645!2d75.86099741953124!3d11.401199700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba671da8daf8b75%3A0x8de8c6b1f3e2d9e0!2sKakkadampoyil%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pinnacle Inn Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-card rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Resort Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pinnacle Inn Nature Resort<br />
                    Kakkadampoyil, Thamarassery<br />
                    Kozhikode, Kerala 673573<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-foreground text-lg mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:info@pinnacleinn.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@pinnacleinn.com</span>
                </a>
              </div>
            </div>

            {/* Travel Directions */}
            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-primary" />
                How to Reach
              </h3>
              <div className="space-y-3">
                {directions.map((dir) => (
                  <div key={dir.from} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{dir.from}</span>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Car className="w-4 h-4" />
                        {dir.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {dir.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-card rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-foreground text-lg mb-4">Nearby Attractions</h3>
              <div className="space-y-2">
                {nearbyAttractions.map((attraction) => (
                  <div key={attraction.name} className="flex items-center justify-between text-sm py-2 border-b border-border last:border-0">
                    <span className="text-foreground">{attraction.name}</span>
                    <span className="text-muted-foreground">{attraction.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
