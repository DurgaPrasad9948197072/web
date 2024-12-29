"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Modern office space with creative team working"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          We Are <span className="text-orange-500">A</span>rino <br />
          Digital Agency
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl"
        >
          We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contact" className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

