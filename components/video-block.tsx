"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function VideoBlock() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // Video play logic would go here
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400 mb-6">We bring light, joy to the old, mundane or otherwise overlooked</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/why-choose-us" className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Learn More
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team collaboration meeting"
                width={1920}
                height={1080}
                className="w-full rounded-lg"
              />
              {!isPlaying && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                  onClick={handlePlay}
                >
                  <Play size={64} className="text-white" />
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

