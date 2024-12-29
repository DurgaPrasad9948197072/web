"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Cpu, Globe, Smartphone } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'
import FunFact from '@/components/funfact'
import VideoBlock from '@/components/video-block'
import Portfolio from '@/components/portfolio'
import Awards from '@/components/awards'
import Testimonials from '@/components/testimonials'
import Blog from '@/components/blog'
import Partners from '@/components/partners'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

const services = [
  { icon: Globe, name: 'Web Development', description: 'Crafting responsive and dynamic websites' },
  { icon: Smartphone, name: 'Mobile Apps', description: 'Building native and cross-platform mobile applications' },
  { icon: Cpu, name: 'UI/UX Design', description: 'Creating intuitive and visually appealing user interfaces' },
  { icon: Code, name: 'Custom Software', description: 'Developing tailor-made software solutions for unique needs' },
]

export default function Home() {
  const [activeService, setActiveService] = useState(0)

  console.log(activeService);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
      <div className="relative z-10">
        <Header />
        <main>
          <section className="relative h-screen flex items-center">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Modern office space with creative team working"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Welcome to <span className="text-orange-500">TechCoreApps</span> <br />
                Your Digital Solution Partner
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-8 max-w-2xl"
              >
                We deliver innovative digital solutions tailored to your business needs, empowering you to thrive in the ever-evolving tech landscape.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href="/get-started"
                  className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </section>

          <FunFact />

          {/* Services Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-10 text-center"
              >
                Our Services
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    onMouseEnter={() => setActiveService(index)}
                  >
                    <service.icon className="text-orange-500 w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="w-[800px] h-[800px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl"
                ></motion.div>
              </div>
            </div>
          </section>

          <VideoBlock />
          <Portfolio />
          <Awards />
          <Testimonials />

          {/* Blog Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-10 text-center"
              >
                Latest Insights
              </motion.h2>
              <Blog />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500 to-blue-500 opacity-10"></div>
            </div>
          </section>

          <Partners />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

