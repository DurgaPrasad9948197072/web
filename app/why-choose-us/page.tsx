"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Users, Zap, Shield, Clock, Award } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const reasons = [
  { icon: CheckCircle, title: 'Quality Assurance', description: 'We deliver top-notch solutions that exceed expectations.' },
  { icon: Users, title: 'Expert Team', description: 'Our team consists of industry veterans and innovative minds.' },
  { icon: Zap, title: 'Fast Turnaround', description: 'We pride ourselves on quick delivery without compromising quality.' },
  { icon: Shield, title: 'Secure & Reliable', description: 'Your data and projects are safe with our robust security measures.' },
  { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance to address your concerns anytime.' },
  { icon: Award, title: 'Award-Winning', description: 'Recognized in the industry for our outstanding work and innovation.' },
]

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
      <div className="relative z-10">
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
                Why Choose Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-center max-w-3xl mx-auto mb-16"
              >
                At Arino, we&rsquo;re committed to delivering exceptional digital solutions that drive your business forward. Here&rsquo;s why we stand out from the crowd.
              </motion.p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <reason.icon className="text-orange-500 w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="md:w-1/2 mb-10 md:mb-0"
                >
                  <h2 className="text-4xl font-bold mb-6">Our Approach</h2>
                  <p className="text-gray-300 mb-6">
                    We believe in a collaborative approach, working closely with our clients to understand their unique needs and challenges. Our process is designed to be transparent, efficient, and results-driven.
                  </p>
                  <ul className="space-y-4">
                    {['Discovery', 'Strategy', 'Design', 'Development', 'Testing', 'Launch', 'Support'].map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="text-orange-500 mr-2" />
                        <span>{step}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="md:w-1/2"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                    alt="Our team in action"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-8"
              >
                Ready to Start Your Project?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl mb-8 max-w-2xl mx-auto"
              >
                Let&rsquo;s collaborate to bring your digital vision to life. Our team is ready to tackle your next big project.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

