"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    review: 'An absolutely magical experience! The mountain views from our room were breathtaking. The staff went above and beyond to make our anniversary special. We will definitely be coming back.',
    avatar: 'PS'
  },
  {
    name: 'Rahul Menon',
    location: 'Bangalore',
    rating: 5,
    review: 'Perfect weekend getaway with family. Kids loved the nature walks and campfire. The rooms were spotless and the food was delicious. Highly recommend for anyone seeking peace.',
    avatar: 'RM'
  },
  {
    name: 'Sneha Nair',
    location: 'Chennai',
    rating: 5,
    review: 'This place is a hidden gem. Woke up to misty mountains every morning. The hospitality was warm and genuine. Already planning our next visit during monsoon season!',
    avatar: 'SN'
  },
  {
    name: 'Arun Kumar',
    location: 'Kozhikode',
    rating: 5,
    review: 'Being a local, I have visited many resorts in Kakkadampoyil, but Pinnacle Inn stands out. The attention to detail, cleanliness, and peaceful atmosphere are unmatched.',
    avatar: 'AK'
  },
  {
    name: 'Meera Krishnan',
    location: 'Kochi',
    rating: 5,
    review: 'A truly rejuvenating experience. The yoga sessions at sunrise were incredible. Food was fresh and organic. This place helped me disconnect and find inner peace.',
    avatar: 'MK'
  }
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 bg-muted/30">
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
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Guest Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Read what our guests have to say about their memorable experiences at Pinnacle Inn.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 font-light"
              >
                &quot;{testimonials[currentIndex].review}&quot;
              </motion.p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
