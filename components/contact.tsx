"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full h-full p-4 md:p-8 lg:p-12 xl:p-16"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Let&rsquo;s connect and discuss your project.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Contact
        </button>
      </div>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.div>
  );
}

