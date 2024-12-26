"use client"

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Works', id: 'works' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' }
  ]

  return (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Qanci</h3>
            <p className="text-gray-400 mb-4">
              Elevating digital experiences with cutting-edge technology and design.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: teams@techcoreapps.com.com</p>
            <p className="text-gray-400 mb-2">Phone: +91 9390656818</p>
            <p className="text-gray-400">Address: 123 Tech Street, Digital City, 12345</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Techcoreapps. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

