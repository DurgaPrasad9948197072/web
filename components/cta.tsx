"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-white"
        >
          Let&rsquo;s discuss make something <i>cool</i> together
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/apply-meeting"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Apply For Meeting
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

