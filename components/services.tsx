"use client"

import { motion } from 'framer-motion'
import { Code, Cpu, Globe, Smartphone } from 'lucide-react'

const services = [
  { icon: Globe, name: 'Web Development', description: 'Crafting responsive and dynamic websites' },
  { icon: Smartphone, name: 'Mobile Apps', description: 'Building native and cross-platform mobile applications' },
  { icon: Cpu, name: 'AI Integration', description: 'Implementing cutting-edge AI solutions' },
  { icon: Code, name: 'Custom Software', description: 'Developing tailor-made software for unique needs' },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span 
            className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl font-bold mt-4 text-gradient">
            Comprehensive Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-xl hover-lift"
            >
              <service.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

