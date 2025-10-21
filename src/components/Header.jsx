import React from 'react'
import { motion } from 'framer-motion'

export default function Header({ theme, setTheme }) {
  return (
    <header className="py-8">
      <div className="container flex items-center justify-between">
        <div>
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-semibold"
          >
            Manjunatha K J
          </motion.h1>
          <motion.p
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.08 }}
            className="text-sm text-slate-500"
          >
            Backend Developer | Golang
          </motion.p>
        </div>
      </div>
    </header>
  )
}