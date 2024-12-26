"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const works = [
  { 
    title: 'E-commerce Platform', 
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028',
    description: 'A state-of-the-art e-commerce solution with AI-driven recommendations',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  { 
    title: 'Fintech Dashboard', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'Real-time financial data visualization and analysis platform',
    tags: ['Vue.js', 'Python', 'PostgreSQL', 'Docker']
  },
  { 
    title: 'Mobile App UI/UX', 
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    description: 'Intuitive and engaging mobile application for lifestyle management',
    tags: ['React Native', 'Firebase', 'Figma']
  },
  { 
    title: 'AI-Powered Analytics', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'Advanced data analytics platform with machine learning capabilities',
    tags: ['TensorFlow', 'Python', 'AWS', 'D3.js']
  },
]

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % works.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + works.length) % works.length)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span 
            className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Our Portfolio
          </motion.span>
          <h2 className="text-4xl font-bold mt-4 text-gradient">
            Featured Projects
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {[works[currentIndex], works[(currentIndex + 1) % works.length]].map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative rounded-2xl overflow-hidden shadow-2xl hover-lift"
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={600}
                    height={400}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-semibold mb-2">{work.title}</h3>
                      <p className="text-gray-300 mb-4">{work.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {work.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

