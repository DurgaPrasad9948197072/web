"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.span 
            className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s collaborate and bring your vision to life with cutting-edge technology and design.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient px-8 py-3 rounded-full text-white text-lg font-medium hover:shadow-lg transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

