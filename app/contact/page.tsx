"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

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
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-center max-w-3xl mx-auto mb-12"
              >
                We&rsquo;d love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, we&rsquo;re here to help.
              </motion.p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <Phone className="mr-4 text-orange-500" />
                        <span>+1 (555) 123-4567</span>
                      </li>
                      <li className="flex items-center">
                        <Mail className="mr-4 text-orange-500" />
                        <span>info@arinoagency.com</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="mr-4 text-orange-500" />
                        <span>123 Digital Street, Tech City, 12345</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
                    <ul className="space-y-2">
                      <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                      <li>Saturday: 10:00 AM - 4:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </motion.div>
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
        </main>
        <Footer />
      </div>
    </div>
  )
}

