import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { projects } from './data/projects' // Assuming this still holds your work projects
import { motion } from 'framer-motion'

// Define the experience data structure here for simplicity (or you can put it in a separate data file)
const experienceData = [
  {
    company: 'New Street Technologies',
    role: 'Backend Engineer',
    duration: '2022 — Present',
    description: 'Developed and maintained scalable microservices for financial technology platforms.',
    bullets: [
      'Built microservices in Golang and Node.js.',
      'Optimized DB queries and improved throughput by over 40%.',
    ],
    // Embed the projects array directly into the experience object
    projects: projects 
  }
  // ... potentially more experience entries
];

export default function App() {
  const [theme, setTheme] = useState('dark')

  // Apply theme to the document element so CSS selectors like [data-theme='dark'] work
  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
    } catch (e) {
      // ignore in environments without document
    }
  }, [theme])

  return (
    <div className="min-h-screen">
      {/* animated background blobs (pure CSS) */}
      <div className="animated-blobs" aria-hidden="true">
        <div className="blob blob--one" />
        <div className="blob blob--two" />
        <div className="blob blob--three" />
      </div>

      <div className="container">
        <Header theme={theme} setTheme={setTheme} />

        <main className="py-6">
          {/* Hero */}
          <section className="mb-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="rounded-lg p-6 hero-float">
                <h2 className="text-3xl font-bold">Hi, I’m <span className="accent">Manjunatha</span>.</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">I build reliable, scalable backend systems. I work with Golang, Node.js and distributed systems.</p>
              </div>
            </motion.div>
          </section>

          {/* Experience (Now includes projects) */}
          <section id="experience" className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            
            {experienceData.map((exp, expIdx) => (
              <div key={expIdx} className="card rounded-lg p-4 mb-4">
                <h4 className="font-medium">{exp.role} — {exp.company}</h4>
                <p className="text-sm text-slate-500">{exp.duration}</p>
                
                {/* General Role Responsibilities */}
                <ul className="mt-2 list-disc ml-5 text-sm text-slate-700 dark:text-slate-200">
                  {exp.bullets.map((b, idx) => <li key={idx} className="mb-1">{b}</li>)}
                </ul>

                {/* Projects Section for this company */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <h5 className="font-semibold mb-3">Key Projects</h5>
                  {exp.projects.map(p => (
                    // Use the existing ProjectCard component to display each work project
                    <ProjectCard key={p.id} p={p} />
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Education */}
          <section id="education" className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="card rounded-lg p-4">
              <p className="text-sm">B.E. — Computer Science</p>
              <p className="text-xs text-slate-500">College name • year</p>
            </div>
          </section>

          {/* Skills & Contact */}
          <section id="contact" className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                {/* Changed to an accessible list structure */}
                <ul className="flex flex-wrap gap-2">
                  {['Golang','Node.js','PostgreSQL','Redis','RabbitMQ','Docker'].map(s => (
                    <li key={s} className="px-3 py-1 rounded text-sm skills-pill">{s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-sm">Email: <a href="mailto:manjunathabhi1512@gmail.com" className="underline">manjunathabhi1512@gmail.com</a></p>
                <p className="text-sm mt-2">LinkedIn: <a href="https://linkedin.com/in/manjunathakj" target="_blank" rel="noopener noreferrer" className="underline">/in/manjunathakj</a></p>
                <p className="text-sm mt-2">GitHub: <a href="https://github.com/manjunathabhi" target="_blank" rel="noopener noreferrer" className="underline">/manjunathabhi</a></p>
                <p className="text-sm mt-2">Instagram: <a href="https://instagram.com/manjunathabhi" target="_blank" rel="noopener noreferrer" className="underline">@manjunathabhi</a></p>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </div>
  )
}