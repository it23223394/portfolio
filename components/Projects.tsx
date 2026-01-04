'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'ReadSphere',
      subtitle: 'AI-Powered Personal Reading Assistant',
      description: 'Full-stack book management platform with AI-driven recommendations, reading tracking, and note-taking with image uploads.',
      tech: ['React.js', 'Spring Boot', 'MySQL', 'Azure Blob Storage', 'JWT'],
      highlights: [
        'AI-powered recommendations with secure JWT auth',
        'Cloud image storage and admin dashboard',
        'Reader analytics with notes and progress tracking'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Oct–Dec 2025',
      gradient: 'from-blue-500 via-cyan-400 to-emerald-400',
    },
    {
      title: 'AI Study Assistant',
      subtitle: 'RAG-Based PDF Q&A System',
      description: 'Answers questions from PDFs using retrieval-augmented generation, semantic search, and LLM integration.',
      tech: ['Python', 'Streamlit', 'Groq LLM', 'RAG', 'Vector Embeddings'],
      highlights: [
        'Chunking and embeddings pipeline for course PDFs',
        'Groq API with guardrails for reliable answers',
        'Search-first UI with source highlighting'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Jan 2026',
      gradient: 'from-purple-500 via-fuchsia-500 to-pink-400',
    },
    {
      title: 'Serene Blooms',
      subtitle: 'Floral & Event Shop',
      description: 'Browse florals, book events, and manage orders with granular admin controls and dashboards.',
      tech: ['React.js', '.NET', 'SQL Server', 'Docker', 'Azure'],
      highlights: [
        'Product catalog with dynamic bundles',
        'Event booking workflows and reminders',
        'Containerized deployment on Azure'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Aug–Oct 2025',
      gradient: 'from-emerald-500 via-teal-400 to-cyan-400',
    },
    {
      title: 'Restaurant Management System',
      subtitle: 'Digital Ordering & Reservations',
      description: 'Digital menus, table reservations, and order tracking with secure multi-role access.',
      tech: ['React.js', 'Spring Boot', 'MySQL'],
      highlights: [
        'Live order status with role-based access',
        'Menu and reservation management',
        'Metrics dashboard for owners'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Feb–May 2025',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
    },
    {
      title: 'Distributed Messaging System',
      subtitle: 'Fault-Tolerant Messaging',
      description: 'Leader election, replication, and recovery for a resilient distributed messaging platform.',
      tech: ['Java', 'Distributed Systems', 'Fault Tolerance'],
      highlights: [
        'Raft-inspired leader election',
        'Replica synchronization and healing',
        'Chaos testing for node failures'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Feb–May 2025',
      gradient: 'from-indigo-500 via-violet-500 to-purple-500',
    },
    {
      title: 'Dogwood Flora',
      subtitle: 'Online Floral Shop',
      description: 'Inventory-first flower shop system with streamlined orders and customer experience.',
      tech: ['React.js', 'Spring Boot', 'MySQL'],
      highlights: [
        'Inventory-aware product pages',
        'Order processing with status updates',
        'Admin CRUD with activity logs'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Jul–Nov 2024',
      gradient: 'from-rose-500 via-pink-500 to-orange-400',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development, AI integration, and system design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/80 dark:bg-gray-800/80 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.gradient} blur-3xl`}></div>
              <div className="relative p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{project.date}</p>
                    <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-50">{project.title}</h3>
                    <p className="text-primary-500 font-semibold text-sm">{project.subtitle}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <Sparkles size={22} />
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-primary-600 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-500 text-primary-600 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
