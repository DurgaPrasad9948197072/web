"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const menuVariants: Variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        const currentScrollY = window.scrollY

        if (currentScrollY < lastScrollY) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }

        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-900/80 backdrop-blur-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              TechCoreApps
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/get-started"
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                Get Started
              </Link>
            </nav>

            <button 
              className="md:hidden z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="text-white w-8 h-8" />
              ) : (
                <Menu className="text-white w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-40 flex flex-col justify-center items-center overflow-y-auto"
          >
            <div className="max-h-full overflow-y-auto py-20">
              {navItems.map((item) => (
                <motion.div key={item.href} variants={menuItemVariants}>
                  <Link
                    href={item.href}
                    className="text-white text-2xl font-bold my-4 hover:text-orange-500 transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/get-started"
                  className="bg-orange-500 text-white px-8 py-3 rounded-full text-xl font-bold hover:bg-orange-600 transition-colors mt-8 inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

