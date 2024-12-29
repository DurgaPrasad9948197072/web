"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    date: '07 Mar 2022',
    title: 'How to keep fear from ruining your art business with confident',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae...',
    author: 'Arino Admin',
    authorLocation: 'London, United Kingdom'
  },
  {
    id: 2,
    date: '15 Apr 2022',
    title: 'A.I becomes more powerful day by day with new approaches',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae...',
    author: 'David Millar',
    authorLocation: 'New York, USA'
  },
  {
    id: 3,
    date: '20 Aug 2022',
    title: 'Local SEO is a very essential role play for new websites',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae...',
    author: 'John Doe',
    authorLocation: 'Sydney, Australia'
  }
]


export default function Blog() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-orange-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">{post.author}</p>
                    <p className="text-sm text-gray-400">{post.authorLocation}</p>
                  </div>
                  <Link href="/blog" className="text-orange-500 hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

