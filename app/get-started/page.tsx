"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const steps = [
  { title: 'Tell us about your project', description: 'Briefly describe your needs and goals.' },
  { title: 'Choose your service', description: 'Select the services that best fit your project.' },
  { title: 'Get a custom quote', description: 'Receive a tailored proposal for your project.' },
  { title: 'Start your journey', description: 'Begin the transformation with our expert team.' },
]

const services = [
  { name: 'Web Development', price: 'Custom' },
  { name: 'Mobile App Development', price: 'Custom' },
  { name: 'UI/UX Design', price: 'From $2,000' },
  { name: 'Digital Marketing', price: 'From $1,500/mo' },
]

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

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
              Get Started with Arino
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-center max-w-3xl mx-auto mb-16"
            >
              Let&rsquo;s embark on a journey to transform your digital presence. Follow these simple steps to get started with our premium services.
            </motion.p>

            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between mb-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index <= currentStep ? 'bg-orange-500' : 'bg-gray-700'
                    } transition-colors duration-300`}>
                      {index < currentStep ? (
                        <Check className="w-6 h-6 text-white" />
                      ) : (
                        <span className="text-white font-bold">{index + 1}</span>
                      )}
                    </div>
                    <p className="text-sm mt-2 text-center">{step.title}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 rounded-lg p-8 mb-8">
                {currentStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold mb-4">Tell us about your project</h2>
                    <textarea
                      className="w-full h-40 bg-gray-700 text-white rounded-lg p-4 mb-4"
                      placeholder="Describe your project needs and goals..."
                    ></textarea>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold mb-4">Choose your services</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg cursor-pointer transition-colors ${
                            selectedServices.includes(service.name)
                              ? 'bg-orange-500'
                              : 'bg-gray-700 hover:bg-gray-600'
                          }`}
                          onClick={() => handleServiceToggle(service.name)}
                        >
                          <h3 className="font-bold">{service.name}</h3>
                          <p className="text-sm text-gray-300">{service.price}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold mb-4">Get a custom quote</h2>
                    <p className="mb-4">Based on your project description and selected services, we&rsquo;ll prepare a custom quote for you. Please provide your contact information so we can reach out to you with the proposal.</p>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-gray-700 text-white rounded-lg p-4 mb-4"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-gray-700 text-white rounded-lg p-4 mb-4"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      className="w-full bg-gray-700 text-white rounded-lg p-4 mb-4"
                    />
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold mb-4">Start your journey</h2>
                    <p className="mb-4">Thank you for providing your information. Our team will review your project details and get back to you within 24 hours with a custom proposal. We&rsquo;re excited to work with you!</p>
                    <p className="font-bold">Next steps:</p>
                    <ul className="list-disc list-inside mb-4">
                      <li>Review our proposal</li>
                      <li>Schedule a consultation call</li>
                      <li>Finalize project details</li>
                      <li>Begin the transformation</li>
                    </ul>
                  </motion.div>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className={`px-6 py-2 rounded-full ${
                    currentStep === 0 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                  disabled={currentStep === 0}
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className={`px-6 py-2 rounded-full flex items-center ${
                    currentStep === steps.length - 1 ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                  <ArrowRight className="ml-2" />
                </button>
              </div>
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
  )
}

