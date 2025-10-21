import React from 'react'
import { motion } from 'framer-motion'
import mePhoto from './me.jpg'

export default function Header({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <header className="py-10 flex flex-col items-center justify-center space-y-4">
      <motion.img
        src={mePhoto}
        alt="Manjunatha K J"
        className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-xl object-cover hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    </header>
  )
}
