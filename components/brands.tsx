"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const brands = [
  'hotjar', 'pendo', 'pingdom', 'LiveChat', 'mailchimp', 'Clearbit'
]

export default function Brands() {
  return (
    <section className="py-16 bg-[#002A2A]">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 mb-8">
          Trusted by your favorite brands and startups
        </p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Image
                src="/placeholder-logo.svg"
                alt={brand}
                width={120}
                height={40}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

