"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Esther Howard',
    role: 'Founder at Gukiya',
    text: 'Qanci transformed our digital presence. Their innovative solutions and attention to detail exceeded our expectations. Highly recommended!',
    image: '/esther-howard.jpg'
  },
  {
    name: 'Leslie Alexander',
    role: 'CEO at Balumtina',
    text: 'Working with Qanci was a game-changer for our business. Their expertise in AI integration helped us stay ahead of the competition.',
    image: '/leslie-alexander.jpg'
  },
  {
    name: 'Kristin Watson',
    role: 'CTO at Keision',
    text: 'The team at Qanci delivered a cutting-edge mobile app that our users love. Their technical skills and creativity are unmatched.',
    image: '/kristin-watson.jpg'
  },
]

export default function Testimonials() {
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
            className="px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Client Feedback
          </motion.span>
          <h2 className="text-4xl font-bold mt-4 text-gradient">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-6 rounded-2xl hover-lift"
            >
              <p className="text-gray-300 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-medium text-gradient">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

