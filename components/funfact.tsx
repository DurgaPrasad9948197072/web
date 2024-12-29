"use client"

import { motion } from 'framer-motion'

const funFactData = [
  { number: '550+', label: 'Projects' },
  { number: '40K+', label: 'Happy global clients' },
  { number: '50K+', label: 'Project completed' },
  { number: '250+', label: 'Team members' },
]

export default function FunFact() {
  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {funFactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg"
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-2">{item.number}</h3>
              <p className="text-gray-400">{item.label}</p>
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

