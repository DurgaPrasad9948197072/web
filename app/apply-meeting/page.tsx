"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

type FormData = {
  name: string
  email: string
  phone: string
  date: string
  time: string
  message: string
}

export default function ApplyMeetingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Here you would typically send the data to your backend
    setIsSubmitted(true)
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
                Apply for a Meeting
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-center max-w-3xl mx-auto mb-12"
              >
                Fill out the form below to schedule a meeting with our team. We&rsquo;ll get back to you as soon as possible.
              </motion.p>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500 text-white p-6 rounded-lg text-center"
                >
                  <h2 className="text-2xl font-bold mb-2">Thank you for your application!</h2>
                  <p>We&rsquo;ll be in touch soon to confirm your meeting.</p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="max-w-2xl mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg"
                >
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <div className="relative">
                      <User className="absolute top-3 left-3 text-gray-400" size={20} />
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        id="name"
                        className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
                        placeholder="Your Name"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-red-500">{errors.name.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                      <input
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        type="email"
                        id="email"
                        className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute top-3 left-3 text-gray-400" size={20} />
                      <input
                        {...register("phone", { required: "Phone number is required" })}
                        type="tel"
                        id="phone"
                        className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-red-500">{errors.phone.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="date" className="block text-sm font-medium mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute top-3 left-3 text-gray-400" size={20} />
                      <input
                        {...register("date", { required: "Date is required" })}
                        type="date"
                        id="date"
                        className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    {errors.date && <p className="mt-1 text-red-500">{errors.date.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="time" className="block text-sm font-medium mb-2">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute top-3 left-3 text-gray-400" size={20} />
                      <input
                        {...register("time", { required: "Time is required" })}
                        type="time"
                        id="time"
                        className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    {errors.time && <p className="mt-1 text-red-500">{errors.time.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute top-3 left-3 text-gray-400" size={20} />
                      <textarea
                        {...register("message", { required: "Message is required" })}
                        id="message"
                        rows={4}
                        className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
                        placeholder="Tell us about your project or questions"
                      ></textarea>
                    </div>
                    {errors.message && <p className="mt-1 text-red-500">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
                  >
                    Submit Application
                  </button>
                </motion.form>
              )}
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

