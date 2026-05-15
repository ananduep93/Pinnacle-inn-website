"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'Best Places to Visit Near Kakkadampoyil',
    excerpt: 'Discover the hidden gems and stunning viewpoints that make Kakkadampoyil a paradise for nature lovers and adventure seekers.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    category: 'Travel Guide'
  },
  {
    title: 'Why Nature Resorts Are Perfect for Relaxation',
    excerpt: 'Learn how disconnecting from the digital world and reconnecting with nature can transform your mental well-being.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    date: 'Mar 10, 2024',
    readTime: '4 min read',
    category: 'Wellness'
  },
  {
    title: 'Weekend Getaway Guide in Kerala',
    excerpt: 'Plan the perfect weekend escape with our comprehensive guide to the most serene destinations in God\'s Own Country.',
    image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    category: 'Travel Guide'
  },
  {
    title: 'Monsoon Beauty of Kakkadampoyil',
    excerpt: 'Experience the magical transformation of Kakkadampoyil during monsoon season with misty mornings and lush green landscapes.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    date: 'Feb 28, 2024',
    readTime: '4 min read',
    category: 'Nature'
  },
  {
    title: 'Family Vacation Tips for Hill Stations',
    excerpt: 'Essential tips and tricks to make your family vacation to hill stations memorable, safe, and enjoyable for everyone.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    date: 'Feb 20, 2024',
    readTime: '5 min read',
    category: 'Family'
  },
  {
    title: 'Hidden Scenic Spots Near Kozhikode',
    excerpt: 'Venture off the beaten path to discover secret viewpoints and untouched natural wonders around Kozhikode.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    date: 'Feb 15, 2024',
    readTime: '7 min read',
    category: 'Adventure'
  }
]

export function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" className="py-24 md:py-32 bg-background">
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
            Journal
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Travel Stories & Tips
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of travel stories, destination guides, and insider tips 
            to make the most of your mountain getaway.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="group grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">
                {blogPosts[0].category}
              </span>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
