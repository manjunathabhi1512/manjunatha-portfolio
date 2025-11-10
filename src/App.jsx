import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { projects } from './data/projects'
import { motion } from 'framer-motion'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const experienceData = [
    {
      company: 'Yappes Technologies, Bengaluru',
      role: 'Software Development Engineer - 2',
      duration: 'Mar 2025 – Present',
      description: 'Gateway Development (Golang, Python & Node.js)',
      bullets: ['Designed and implemented plugins for API gateway'],
      projects: projects.filter(p => p.id === 'gateway-dev')
    },
    {
      company: 'New Street Technologies, Bengaluru',
      role: 'Software Engineer (Backend)',
      duration: 'Nov 2022 – Feb 2025',
      description: 'Workflow orchestration and loan management systems in Golang, Node.js & Java.',
      bullets: [
        'Developed workflow orchestration service using Temporal replacing legacy lifecycle module.',
        'Built microservices for loan origination and management for major banks.',
        'Developed inhouse Hyperledger Fabric BAAS automation tool "WAND" using Golang.'
      ],
      projects: projects.filter(p =>
        ['workflow-orchestration', 'loan-management', 'hyperledger-wand'].includes(p.id)
      )
    },
    {
      company: 'Algotrak Pvt Ltd (Remote)',
      role: 'RPA Developer Intern',
      duration: 'Nov 2021 – May 2022',
      description: 'Automation Anywhere bot migration for OTIS client.',
      bullets: ['Recaptured and validated workflow objects in migrated bots (AA v11 → AA360).'],
      projects: projects.filter(p => p.id === 'bot-migration')
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Background animation */}
      <div className="animated-blobs" aria-hidden="true">
        <div className="blob blob--one" />
        <div className="blob blob--two" />
        <div className="blob blob--three" />
      </div>

      <div className="container relative z-10">
        <Header theme={theme} setTheme={setTheme} />

        <main className="py-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                Manjunatha K J
              </h1>
              <h2 className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium">
                Backend Developer • Golang | Node.js | Microservices
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
                I’m a backend engineer who loves building scalable systems 
                that are fast, reliable, and secure. Passionate about cloud-native architecture, observability, and designing 
                efficient workflows for real-world products.
              </p>
            </motion.div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">Experience</h3>
            {experienceData.map((exp, expIdx) => (
              <motion.div
                key={expIdx}
                className="card rounded-xl p-6 mb-6 hero-float bg-white/30 dark:bg-slate-800/40 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: expIdx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{exp.role}</h4>
                <p className="text-slate-500 dark:text-slate-400">{exp.company} — {exp.duration}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{exp.description}</p>
                <ul className="mt-2 list-disc ml-6 text-sm text-slate-700 dark:text-slate-200 space-y-1">
                  {exp.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                </ul>
                <div className="mt-4 border-t border-slate-200 dark:border-slate-700 pt-3">
                  <h5 className="font-medium mb-2 text-indigo-500 dark:text-indigo-400">Key Projects</h5>
                  {exp.projects.map(p => <ProjectCard key={p.id} p={p} />)}
                </div>
              </motion.div>
            ))}
          </section>

          {/* Education */}
          <section id="education" className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="card rounded-xl p-5 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md hero-float"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-semibold text-slate-900 dark:text-slate-100">PES University, Bengaluru</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">B.Tech in Computer Science (2019–2022)</p>
              </motion.div>
              <motion.div
                className="card rounded-xl p-5 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md hero-float"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <p className="font-semibold text-slate-900 dark:text-slate-100">Government Polytechnic Holenarasipura</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Diploma in Computer Science (2016–2019)</p>
              </motion.div>
            </div>
          </section>

          {/* Skills & Contact */}
          <section id="contact" className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Skills</h3>
                <ul className="flex flex-wrap gap-2">
                  {[
                    'Golang', 'Node.js', 'Python', 'Java', 'Microservices', 'PostgreSQL', 'Redis',
                    'RabbitMQ', 'Docker', 'Kubernetes', 'AWS', 'Prometheus', 'Grafana', 'Loki'
                  ].map(skill => (
                    <li
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-slate-200/60 dark:bg-slate-700/60 text-slate-800 dark:text-slate-100 hover:bg-indigo-500 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Contact</h3>
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <p>📧 <a href="mailto:manjunathabhi1512@gmail.com" className="underline hover:text-indigo-500">manjunathabhi1512@gmail.com</a></p>
                  <p>📞 8970824224</p>
                  <p>📍 Bengaluru - 560017</p>
                  <p>LinkedIn: <a href="https://linkedin.com/in/manjunathakj" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">/in/manjunathakj</a></p>
                  <p>GitHub: <a href="https://github.com/manjunathabhi" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">/manjunathabhi</a></p>
                  <p>Instagram: <a href="https://instagram.com/manjunathabhi" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-500">@manjunathabhi</a></p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
