"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Achievements() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className='bg-[#F2F2F2] py-20' ref={ref}>
      <motion.div
        className='container mx-auto flex flex-col items-center'
        style={{ scale: scale, opacity: opacity }}
      >
        <h2 className='text-3xl font-bold text-center mb-10'>Achievements</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Achievement cards will go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2">Achievement 1</h3>
            <p className="text-gray-700">Description of achievement 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2">Achievement 2</h3>
            <p className="text-gray-700">Description of achievement 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2">Achievement 3</h3>
            <p className="text-gray-700">Description of achievement 3.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

