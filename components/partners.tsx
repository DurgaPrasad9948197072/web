"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'Company 1',
    logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80',
  },
  {
    name: 'Company 2',
    logo: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?auto=format&fit=crop&q=80',
  },
  {
    name: 'Company 3',
    logo: 'https://images.unsplash.com/photo-1614680376739-8d7c990fdd0c?auto=format&fit=crop&q=80',
  },
  {
    name: 'Company 4',
    logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80',
  },
  {
    name: 'Company 5',
    logo: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80',
  },
  {
    name: 'Company 6',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
  },
  {
    name: 'Company 7',
    logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80',
  },
  {
    name: 'Company 8',
    logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80',
  },
]

export default function Partners() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-10 text-center text-white"
        >
          Our Partners
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={150}
                height={50}
                className="max-w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10"></div>
      </div>
    </section>
  )
}

