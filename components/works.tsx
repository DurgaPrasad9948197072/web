"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Works() {
  const [works] = useState([
    {
      id: 1,
      title: 'Project 1',
      image: '/images/project1.jpg',
      description: 'Description of Project 1',
      url: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      image: '/images/project2.jpg',
      description: 'Description of Project 2',
      url: 'https://example.com/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      image: '/images/project3.jpg',
      description: 'Description of Project 3',
      url: 'https://example.com/project3',
    },
  ])

  const [currentWorkIndex, setCurrentWorkIndex] = useState(0)

  const handlePrev = () => {
    setCurrentWorkIndex((prevIndex) => (prevIndex === 0 ? works.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentWorkIndex((prevIndex) => (prevIndex === works.length - 1 ? 0 : prevIndex + 1))
  }

  const currentWork = works[currentWorkIndex]

  return (
    <section className='relative w-full h-[500px] overflow-hidden'>
      <AnimatePresence initial={false} custom={{ opacity: 1 }}>
        <motion.div
          key={currentWork.id}
          className='absolute inset-0 flex items-center justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='relative w-[80%] h-[80%]'>
            <Image
              src={currentWork.image}
              alt={currentWork.title}
              fill
              style={{ objectFit: 'cover' }}
              className='rounded-xl'
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className='absolute bottom-4 left-4 flex gap-4'>
        <button onClick={handlePrev} className='bg-gray-800 p-2 rounded-full hover:bg-gray-700'>
          <ChevronLeft className='w-6 h-6 text-white' />
        </button>
        <button onClick={handleNext} className='bg-gray-800 p-2 rounded-full hover:bg-gray-700'>
          <ChevronRight className='w-6 h-6 text-white' />
        </button>
      </div>
    </section>
  )
}

