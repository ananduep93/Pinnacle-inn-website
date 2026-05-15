"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mountain, Heart, Users, Leaf } from 'lucide-react'

const features = [
  {
    icon: Mountain,
    title: 'Mountain Views',
    description: 'Wake up to breathtaking panoramic views of the Western Ghats'
  },
  {
    icon: Heart,
    title: 'Peaceful Atmosphere',
    description: 'Escape the chaos and find your inner peace in serene surroundings'
  },
  {
    icon: Users,
    title: 'Family-Friendly',
    description: 'Safe, welcoming spaces designed for families with children'
  },
  {
    icon: Leaf,
    title: 'Eco-Conscious',
    description: 'Sustainable practices that preserve our beautiful environment'
  }
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                alt="Pinnacle Inn Resort View"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary/30 rounded-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Where Nature Meets <span className="text-primary">Luxury</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled in the pristine hills of Kakkadampoyil, Pinnacle Inn is more than just a resort—it&apos;s 
              a sanctuary where time slows down and nature speaks. Our family-run retreat offers the 
              perfect escape from the everyday hustle.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Whether you&apos;re seeking a romantic weekend getaway, a family vacation filled with adventure, 
              or simply a quiet corner to reconnect with yourself, Pinnacle Inn welcomes you with open arms 
              and warm hospitality.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
