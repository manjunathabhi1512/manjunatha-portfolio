import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import mePhoto from './me.jpg'

export default function Header({ theme, setTheme }) {
  const [isCompressed, setIsCompressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const iconAnimation = {
    rotate: isHovered ? 360 : 0,
    scale: isCompressed ? (isHovered ? 1.3 : 1.2) : 1,
    transition: {
      rotate: { duration: 0.5, ease: "easeInOut" },
      scale: { duration: 0.3 }
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCompressed(true)
    }, 3000) // Compress after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="py-10 flex flex-col items-center justify-center space-y-2">
      <motion.img
        src={mePhoto}
        alt="Manjunatha K J"
        className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-xl object-cover hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      
      <motion.div
        className="fixed right-6 z-50"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <motion.a
          href="/assets/manjunatha-resume.pdf"
          download
          className={`relative flex items-center justify-center ${
            isCompressed 
              ? 'w-12 h-12 rounded-full' 
              : 'px-6 py-3 rounded-full min-w-[180px]'
          } bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg transition-all duration-500 ease-in-out`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={pulseAnimation}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute inset-0 bg-indigo-400 rounded-full opacity-50"
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <AnimatePresence>
            {!isCompressed && (
              <motion.span
                className="mr-2 whitespace-nowrap relative"
                initial={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                Download Resume
              </motion.span>
            )}
          </AnimatePresence>
          <motion.svg 
            className={`w-5 h-5 ${isCompressed ? 'm-auto' : ''} relative`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            animate={iconAnimation}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </motion.svg>
        </motion.a>
      </motion.div>
    </header>
  )
}
