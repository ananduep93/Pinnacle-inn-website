"use client"

import { Phone, MessageCircle, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export function MobileActionTabs() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/80 backdrop-blur-xl border-t border-border px-4 py-2 pb-safe"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a 
          href="tel:+919876543210"
          className="flex-1 flex flex-col items-center justify-center py-2 gap-1 text-muted-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </a>
        
        <a 
          href="#booking"
          className="flex-[2] bg-primary text-primary-foreground rounded-full py-3 px-6 flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-semibold text-sm">Book Now</span>
        </a>

        <a 
          href="https://wa.me/919876543210"
          className="flex-1 flex flex-col items-center justify-center py-2 gap-1 text-muted-foreground hover:text-green-500 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </motion.div>
  )
}
