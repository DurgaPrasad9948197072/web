import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TechCoreApps</h3>
            <p className="mb-4">TechCoreApps delivers cutting-edge digital solutions to empower businesses in the tech-driven world.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="hover:text-orange-500">Web Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-orange-500">App Development</Link></li>
              <li><Link href="/services/ui-ux-design" className="hover:text-orange-500">UI/UX Design</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-orange-500">Digital Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p>123 Digital Street</p>
            <p>Tech City, TC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@techcoreapps.com</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-orange-500 text-white px-4 py-2 rounded-r-full hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TechCoreApps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

