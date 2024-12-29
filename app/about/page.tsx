"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Briefcase, Users, Target, Clock } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const teamMembers = [
  { name: 'John Doe', position: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80' },
  { name: 'Jane Smith', position: 'Creative Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80' },
  { name: 'Mike Johnson', position: 'Lead Developer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80' },
]

const milestones = [
  { year: '2010', event: 'Arino founded' },
  { year: '2013', event: 'Expanded services to mobile app development' },
  { year: '2016', event: 'Opened international office in London' },
  { year: '2019', event: 'Launched AI-driven digital marketing services' },
  { year: '2022', event: 'Celebrated serving over 1000 clients worldwide' },
]

export default function AboutPage() {
  const [activeTeamMember, setActiveTeamMember] = useState(0)

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
              About TechCoreApps
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-center max-w-3xl mx-auto mb-12"
            >
              We are a team of passionate digital experts, committed to delivering innovative solutions that drive business growth and user engagement.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">
                  Founded in 2010, Arino has grown from a small startup to a leading digital agency. Our journey has been marked by continuous innovation, client success, and a commitment to excellence in every project we undertake.
                </p>
                <p>
                  Today, we&rsquo;re proud to serve clients across various industries, bringing our expertise in web development, mobile applications, and digital marketing to businesses of all sizes.
                </p>
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

        <section className="py-20 bg-gray-800 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Briefcase, title: 'Excellence', description: 'We strive for excellence in every project, big or small.' },
                { icon: Users, title: 'Collaboration', description: 'We believe in the power of teamwork and open communication.' },
                { icon: Target, title: 'Innovation', description: 'We constantly push boundaries to deliver cutting-edge solutions.' },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg"
                >
                  <value.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500 to-blue-500 opacity-10"></div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Our Team
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                  onMouseEnter={() => setActiveTeamMember(index)}
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-400">{member.position}</p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: activeTeamMember === index ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-orange-500 mt-2"
                  ></motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500 to-red-500 opacity-10"></div>
          </div>
        </section>

        <section className="py-20 bg-gray-800 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Our Journey
            </motion.h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2"></div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center z-10">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className={`w-1/2 p-4 rounded-lg bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg ${index % 2 === 0 ? 'text-right mr-4' : 'ml-4'}`}>
                    <h3 className="text-xl font-bold">{milestone.year}</h3>
                    <p>{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-10"></div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8"
            >
              Ready to Work with Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Let&rsquo;s collaborate to bring your digital vision to life. Our team is ready to tackle your next big project.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get in Touch
            </motion.button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500 to-orange-500 opacity-10"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

