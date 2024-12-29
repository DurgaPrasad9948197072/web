"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the cutting-edge technologies and methodologies shaping the future of web development. From AI-driven design to WebAssembly, discover what\'s next in the world of web tech.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    author: 'John Doe',
    date: 'April 15, 2024',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Mastering Mobile App Design: Tips for a Seamless User Experience',
    excerpt: 'Learn the key principles of mobile app design that will help you create intuitive, engaging, and user-friendly applications. Dive into best practices for layout, navigation, and interaction design.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    author: 'Jane Smith',
    date: 'April 10, 2024',
    category: 'Mobile Development'
  },
  {
    id: 3,
    title: 'The Rise of AI in Digital Marketing: Strategies for Success',
    excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing. From personalized content creation to predictive analytics, learn how to leverage AI to boost your marketing efforts.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    author: 'Mike Johnson',
    date: 'April 5, 2024',
    category: 'Digital Marketing'
  },
  {
    id: 4,
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Protect your small business from cyber threats with these essential security practices. Learn about risk assessment, employee training, and the latest tools to safeguard your digital assets.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    author: 'Sarah Lee',
    date: 'March 30, 2024',
    category: 'Cybersecurity'
  },
  {
    id: 5,
    title: 'The Impact of 5G on IoT Development',
    excerpt: 'Explore how 5G technology is set to transform the Internet of Things landscape. From smart cities to industrial automation, discover the new possibilities and challenges in IoT development.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
    author: 'David Brown',
    date: 'March 25, 2024',
    category: 'IoT'
  },
  {
    id: 6,
    title: 'Accessibility in Web Design: Creating Inclusive Digital Experiences',
    excerpt: 'Learn why accessibility is crucial in modern web design and how to implement inclusive design principles. Discover tools, techniques, and best practices for creating websites that everyone can use.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
    author: 'Emily Chen',
    date: 'March 20, 2024',
    category: 'Web Design'
  }
]

const categories = ['All', 'Web Development', 'Mobile Development', 'Digital Marketing', 'Cybersecurity', 'IoT', 'Web Design']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

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
              TechCoreApps Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-center max-w-3xl mx-auto mb-12"
            >
              Stay updated with the latest trends, insights, and best practices in tech and digital innovation.
            </motion.p>

            <div className="flex flex-wrap justify-center mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`m-2 px-4 py-2 rounded-full ${
                    activeCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  } transition-colors`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {post.date}
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`} className="inline-flex items-center text-orange-500 hover:text-orange-600">
                      Read More <ArrowRight size={16} className="ml-2" />
                    </Link>
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
      </main>
      <Footer />
    </div>
  )
}

