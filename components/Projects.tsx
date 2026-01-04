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
      featured: true,
      title: 'ReadSphere',
      subtitle: 'AI-Powered Personal Reading Assistant',
      description: 'Full-stack book management platform with AI-driven recommendations, reading tracking, and note-taking with image uploads. Features secure JWT authentication and comprehensive admin dashboard.',
      tech: ['React.js', 'Spring Boot', 'MySQL', 'Azure Blob Storage', 'JWT'],
      highlights: [
        'AI-powered book recommendations',
        'Secure authentication & authorization',
        'Cloud-based image storage',
        'Admin dashboard for catalog management'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Oct–Dec 2025',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      featured: true,
      title: 'AI Study Assistant',
      subtitle: 'RAG-Based PDF Q&A System',
      description: 'Intelligent AI tutor that answers questions from course PDFs using Retrieval-Augmented Generation with semantic search and LLM integration.',
      tech: ['Python', 'Streamlit', 'Groq LLM', 'RAG', 'Vector Embeddings'],
      highlights: [
        'PDF processing pipeline',
        'Local embeddings for document retrieval',
        'Groq API integration',
        'Semantic search capabilities'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Jan 2026',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      featured: false,
      title: 'Serene Blooms',
      subtitle: 'Floral & Event Shop',
      description: 'Full-stack web application for floral browsing, event booking, and order management with comprehensive admin controls.',
      tech: ['React.js', '.NET', 'SQL Server', 'Docker', 'Azure'],
      highlights: [
        'Product Management module',
        'Event booking system',
        'Containerized deployment'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Aug–Oct 2025',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      featured: false,
      title: 'Restaurant Management System',
      subtitle: 'Digital Ordering & Reservations',
      description: 'Comprehensive solution for digital ordering, reservations, menu handling, and admin dashboard with secure user management.',
      tech: ['React.js', 'Spring Boot', 'MySQL'],
      highlights: [
        'Secure authentication system',
        'Real-time order tracking',
        'Menu management'
      ],
      github: 'https://github.com/it23223394',
      demo: '#',
      date: 'Feb–May 2025',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      featured: false,
      title: 'Fault-Tolerant Distributed Messaging System',
      subtitle: 'Distributed Systems Project',
      description: 'Built a distributed messaging platform with leader election, replication, and fault recovery mechanisms.',
      tech: ['Java', 'Distributed Systems', 'Fault Tolerance'],
      highlights: [
        'Leader election algorithm',
        'Data replication',
        'Automatic fault recovery'
      ],
      github: 'https://github.com/it23223394',
      date: 'Feb–May 2025',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      featured: false,
      title: 'Dogwood Flora',
      subtitle: 'Online Floral Shop',
      description: 'Web system for flower shop to manage products, orders, and inventory, improving customer experience and operational efficiency.',
      tech: ['React.js', 'Spring Boot', 'MySQL'],
      highlights: [
        'CRUD operations for products',
        'Inventory management',
        'Order processing'
      ],
      github: 'https://github.com/it23223394',
      date: 'Jul–Nov 2024',
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

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

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
            >
              <div className="md:flex">
                {/* Project Visual */}
                <div className={`md:w-2/5 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative`}>
                  <div className="text-white text-center">
                    <Sparkles size={64} className="mx-auto mb-4 animate-float" />
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.date}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="md:w-3/5 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-primary-500 font-semibold mb-3">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary-500 mr-2">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg mb-4`}></div>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-primary-500 font-semibold mb-2">{project.subtitle}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.date}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                      <span className="text-primary-500 mr-2">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium text-sm"
                >
                  <Github size={16} />
                  View Code
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
