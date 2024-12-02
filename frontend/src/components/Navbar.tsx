import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Documentation', to: '/documentation' },
    { name: 'About', to: '/about' },
  ]

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <nav className="mx-auto max-w-8xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-5">
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-center group">
            <motion.span 
                  className="text-2xl font-bold gradient-text"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                <img
                  src="/favicon.ico" // Replace with your logo's path
                  alt="CloudWise Logo"
                  className="h-10 w-auto mr-3" // Adjust size and margin as needed
                />
                </motion.span>
                <motion.span 
                  className="text-2xl font-bold gradient-text"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  
                  Kloudwise
                </motion.span>
              </Link>
            </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              > 
                <Link
                  to={item.to}
                  className="text-sm font-semibold text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
            <Link to="/services">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden py-4"
            >
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="gradient-bg text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg w-full"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar