"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is the best time to visit Pinnacle Inn?',
    answer: 'The best time to visit is from September to May. October to February offers pleasant weather with misty mornings, while monsoon (June-August) transforms the landscape into lush green paradise with occasional rain. Each season has its own charm!'
  },
  {
    question: 'Is Pinnacle Inn family-friendly?',
    answer: 'Absolutely! We welcome families with open arms. Our resort features spacious family cottages, safe play areas for children, and activities suitable for all ages including nature walks, campfire nights, and bird watching sessions.'
  },
  {
    question: 'What are the nearby attractions?',
    answer: 'Within easy reach are Kakkadampoyil viewpoint (2km), Janakikkadu Forest (5km), Thusharagiri Waterfalls (18km), and the beautiful Kozhikode beach (45km). We can arrange guided tours to all these destinations.'
  },
  {
    question: 'What are the check-in and check-out timings?',
    answer: 'Standard check-in time is 2:00 PM and check-out is 11:00 AM. However, we offer flexible timings based on availability. Early check-in and late check-out can be arranged with prior notice.'
  },
  {
    question: 'Is parking available at the resort?',
    answer: 'Yes, we provide free and secure parking for all our guests. The parking area is well-lit and monitored. We can accommodate vehicles of all sizes including SUVs and small buses for group bookings.'
  },
  {
    question: 'Do you provide meals?',
    answer: 'Yes, we offer delicious Kerala cuisine prepared with fresh, locally-sourced ingredients. Our restaurant serves breakfast, lunch, and dinner. We can also accommodate dietary restrictions with advance notice. Complimentary tea/coffee is available throughout the day.'
  },
  {
    question: 'Is WiFi available?',
    answer: 'Yes, complimentary WiFi is available throughout the resort. However, we encourage guests to take this opportunity to disconnect from the digital world and reconnect with nature!'
  },
  {
    question: 'What activities are available at the resort?',
    answer: 'We offer a variety of activities including guided nature walks, bird watching, campfire nights with local music, sunrise/sunset viewpoint visits, yoga sessions, village tours, and photography walks. Most activities are complimentary for guests.'
  }
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Have Questions?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Frequently Asked
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about your stay at Pinnacle Inn.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between p-5 text-left">
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 p-8 bg-card rounded-2xl shadow-md"
        >
          <p className="text-foreground mb-4">
            Still have questions? We&apos;re happy to help!
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi, I have a question about Pinnacle Inn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
