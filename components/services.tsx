"use client"

import { motion } from 'framer-motion'
import { Code, Cpu, Globe, Smartphone } from 'lucide-react'

const services = [
  { icon: Globe, name: 'Web Development', description: 'Crafting responsive and dynamic websites' },
  { icon: Smartphone, name: 'Mobile Apps', description: 'Building native and cross-platform mobile applications' },
  { icon: Cpu, name: 'UI/UX Design', description: 'Creating intuitive and visually appealing user interfaces' },
  { icon: Code, name: 'Custom Software', description: 'Developing tailor-made software solutions for unique needs' },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <service.icon className="text-orange-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

