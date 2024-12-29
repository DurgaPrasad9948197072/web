"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

const categories = ['All', 'Web Design', 'Mobile Apps', 'Branding', 'UI/UX Design']

const portfolioItems = [
  {
    id: 1,
    title: 'Creative Art Work',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80',
    description: 'A stunning website design for an art gallery, showcasing various artworks in an interactive and visually appealing manner.'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    description: 'An intuitive mobile app design for a fitness tracking application, helping users monitor their health and workout routines.'
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    description: 'A comprehensive brand identity design for a sustainable fashion company, including logo, color palette, and brand guidelines.'
  },
  {
    id: 4,
    title: 'User Interface',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    description: 'A sleek and modern user interface design for a smart home control system, prioritizing ease of use and accessibility.'
  },
  {
    id: 5,
    title: 'E-commerce Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    description: 'A fully responsive e-commerce website design for a boutique clothing store, featuring smooth navigation and seamless checkout process.'
  },
  {
    id: 6,
    title: 'Product Design',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80',
    description: 'An innovative product design for a wearable tech device, combining functionality with aesthetics for optimal user experience.'
  }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Our Portfolio
        </motion.h2>
        
        <div className="flex flex-wrap justify-center mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`m-2 px-4 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-colors`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-lg cursor-pointer bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg"
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            View All Projects
          </motion.button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-10"></div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-800 p-6 rounded-lg max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-4">
                <button onClick={() => setSelectedItem(null)}>
                  <X className="text-gray-400 hover:text-white" />
                </button>
              </div>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-400 mb-4">{selectedItem.category}</p>
              <p className="text-gray-300">{selectedItem.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

