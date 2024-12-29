"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code, Smartphone, Globe, Palette, Megaphone, BarChart } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'We create responsive, fast, and user-friendly websites tailored to your business needs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Our team builds native and cross-platform mobile apps that engage users and drive results.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'We design intuitive and visually appealing interfaces that enhance user experience.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80'
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'We develop bespoke software solutions to address your unique business challenges.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Our marketing strategies help you reach your target audience and grow your online presence.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80'
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'We provide insights from your data to help you make informed business decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  }
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)

  console.log(activeService);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-8 text-center"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-center max-w-3xl mx-auto mb-12"
            >
              We offer a comprehensive range of digital services to help your business thrive in the online world.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-orange-500" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
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

        <section className="py-20 bg-gray-800 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              Our Process
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Discovery', description: 'We start by understanding your business goals and requirements.' },
                { step: 2, title: 'Planning', description: 'We create a detailed roadmap for your project.' },
                { step: 3, title: 'Execution', description: 'Our team brings your vision to life with cutting-edge technology.' },
                { step: 4, title: 'Delivery', description: 'We launch your project and provide ongoing support.' },
              ].map((phase, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10"></div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              Why Choose Us
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="space-y-4">
                  {[
                    'Experienced team of professionals',
                    'Cutting-edge technology and tools',
                    'Tailored solutions for your business',
                    'Transparent communication throughout the project',
                    'Ongoing support and maintenance',
                  ].map((point, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500 to-blue-500 opacity-10"></div>
          </div>
        </section>

        <section className="py-20 bg-gray-800 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Let&rsquo;s discuss how we can help your business grow with our digital services.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500 to-red-500 opacity-10"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

