import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      layout
      whileHover={{ y: -6, boxShadow: '0 14px 30px rgba(12,14,22,0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="card rounded-lg p-4 mb-4 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">{p.title}</h3>
          <p className="text-sm text-slate-500">{p.tagline}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.tech.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">{t}</span>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={() => setOpen(!open)}
            className="text-sm px-3 py-1 border rounded"
          >
            {open ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="mt-3 overflow-hidden"
          >
            <ul className="list-disc ml-5 text-sm text-slate-700 dark:text-slate-200">
              {p.bullets.map((b, idx) => <li key={idx} className="mb-1">{b}</li>)}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}