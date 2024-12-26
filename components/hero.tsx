"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={containerRef} className="pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <motion.span 
              className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Premium Development Agency
            </motion.span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient">
              Elevate Your Digital Presence
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              We craft cutting-edge solutions that propel your business into the future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg"
            >
              Get Started
            </motion.button>
          </motion.div>
          
          <motion.div 
            style={{ y, opacity }}
            className="lg:w-1/2 relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Modern Development Team"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
              priority
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

