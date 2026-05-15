"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    alt: 'Resort Exterior',
    span: 'col-span-2 row-span-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    alt: 'Mountain View',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    alt: 'Luxury Room',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    alt: 'Resort Gardens',
    span: 'col-span-1 row-span-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80',
    alt: 'Sunset View',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    alt: 'Nature Trail',
    span: 'col-span-2 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=800&q=80',
    alt: 'Campfire Area',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1518173946687-a4c036bc8b9a?w=800&q=80',
    alt: 'Forest View',
    span: 'col-span-1 row-span-1'
  }
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + galleryImages.length) % galleryImages.length
      : (selectedImage + 1) % galleryImages.length
    setSelectedImage(newIndex)
  }

  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted/30">
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
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a visual tour of Pinnacle Inn and the breathtaking landscapes 
            that surround our mountain retreat.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative rounded-xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium text-lg">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev') }}
              className="absolute left-4 text-white/80 hover:text-white p-2 transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next') }}
              className="absolute right-4 text-white/80 hover:text-white p-2 transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
