"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sunrise, Flame, TreePine, Sparkles, Footprints, Camera } from 'lucide-react'

const experiences = [
  {
    icon: Sunrise,
    title: 'Sunrise Watching',
    description: 'Wake up to magical sunrises painting the mountains in golden hues',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80'
  },
  {
    icon: Flame,
    title: 'Campfire Nights',
    description: 'Gather around crackling bonfires under a canopy of stars',
    image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=800&q=80'
  },
  {
    icon: TreePine,
    title: 'Nature Trails',
    description: 'Explore lush green trails winding through pristine forests',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'
  },
  {
    icon: Sparkles,
    title: 'Spa & Wellness',
    description: 'Rejuvenate your mind and body with traditional Kerala treatments',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
  },
  {
    icon: Footprints,
    title: 'Village Walks',
    description: 'Experience authentic village life and local culture',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80'
  },
  {
    icon: Camera,
    title: 'Photography Tours',
    description: 'Capture stunning landscapes with guided photo walks',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&q=80'
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
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
            Activities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Resort Experiences
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create unforgettable memories with our curated experiences designed 
            to immerse you in the beauty and culture of Kakkadampoyil.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                    <exp.icon className="w-7 h-7 text-white group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#booking"
            className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Plan Your Experience
          </a>
        </motion.div>
      </div>
    </section>
  )
}
