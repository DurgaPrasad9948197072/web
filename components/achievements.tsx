"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const achievementItems = [
  { id: 'projects', label: 'Projects', value: '200+', description: 'Successful projects delivered' },
  { id: 'clients', label: 'Clients', value: '50+', description: 'Happy clients worldwide' },
  { id: 'awards', label: 'Awards', value: '25+', description: 'Industry recognitions' },
  { id: 'team', label: 'Team', value: '100+', description: 'Skilled professionals' },
]

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <section className="py-20 bg-gray-800" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span 
            className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Our Impact
          </motion.span>
          <h2 className="text-4xl font-bold mt-4 text-gradient">
            Milestones Achieved
          </h2>
        </motion.div>

        <motion.div 
          style={{ scale, opacity }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievementItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl text-center hover-lift"
            >
              <motion.div 
                className="text-5xl font-bold mb-2 text-gradient"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {item.value}
              </motion.div>
              <div className="text-xl font-medium mb-2">{item.label}</div>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

