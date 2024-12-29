"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Tech Corp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    quote: `Working with Arino has been an absolute pleasure. Their team's expertise and dedication have significantly improved our online presence.`
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Marketing Director, InnovateCo',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: `The creativity and professionalism of Arino's team are unmatched. They delivered beyond our expectations and in record time.`
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Founder, StartUp Inc',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    quote: `Arino's innovative approach to digital solutions has been a game-changer for our startup. Highly recommended!`
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">What Our Clients Say</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div>
                  <p className="text-xl italic mb-4">&ldquo;{testimonials[currentIndex].quote}&rdquo;</p>
                  <h3 className="text-lg font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-400">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange-500 p-2 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-500 p-2 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

