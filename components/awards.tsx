"use client"

import { motion } from 'framer-motion'

const awards = [
  { year: '2019', title: 'Google awards', subtitle: 'Website of the day' },
  { year: '2020', title: 'CSS awards design', subtitle: 'Honorable mention' },
  { year: '2021', title: 'New technology innovation', subtitle: 'Desktop excellence' },
  { year: '2022', title: 'UI/UX design of the month', subtitle: 'Mobile excellence' },
]

export default function Awards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Awards</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-orange-500 text-xl mb-2">{award.year}</h3>
              <h4 className="text-2xl font-bold mb-2">{award.title}</h4>
              <p className="text-gray-400">{award.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

