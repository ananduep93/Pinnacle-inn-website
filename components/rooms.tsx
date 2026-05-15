"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Wifi, Coffee, Tv, Wind, Bath, Users } from 'lucide-react'

const rooms = [
  {
    name: 'Mountain View Suite',
    description: 'Spacious suite with panoramic mountain views, private balcony, and luxury amenities',
    price: '₹4,500',
    priceUnit: 'per night',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    amenities: ['Wifi', 'Coffee', 'TV', 'AC'],
    guests: '2-4 Guests'
  },
  {
    name: 'Family Cottage',
    description: 'Perfect for families with separate living area, garden access, and kid-friendly spaces',
    price: '₹6,500',
    priceUnit: 'per night',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    amenities: ['Wifi', 'Coffee', 'TV', 'AC'],
    guests: '4-6 Guests'
  },
  {
    name: 'Deluxe Room',
    description: 'Cozy and comfortable room with modern amenities and beautiful nature views',
    price: '₹3,000',
    priceUnit: 'per night',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    amenities: ['Wifi', 'Coffee', 'TV', 'AC'],
    guests: '2 Guests'
  }
]

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Wifi': Wifi,
  'Coffee': Coffee,
  'TV': Tv,
  'AC': Wind
}

export function Rooms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="rooms" className="py-24 md:py-32 bg-muted/30">
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
            Accommodations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Rooms & Suites
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully designed accommodations, each offering comfort, 
            privacy, and stunning views of the surrounding nature.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {room.guests}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex gap-3 mb-6">
                  {room.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity]
                    return (
                      <div
                        key={amenity}
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center"
                        title={amenity}
                      >
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )
                  })}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-foreground">{room.price}</span>
                    <span className="text-muted-foreground text-sm"> {room.priceUnit}</span>
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
