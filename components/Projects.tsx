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
      title: 'Hospital Appointment No-Show Analysis',
      subtitle: 'Predictive Risk Modeling & Insights',
      description: 'Analyzed 110,000+ patient records to identify factors influencing appointment absenteeism. Built predictive models and interactive dashboards for operational decision-making.',
      tech: ['Python', 'Pandas', 'SQL', 'Scikit-learn', 'Plotly Dash', 'Statistical Analysis'],
      highlights: [
        'Analyzed 110K+ patient records for no-show patterns',
        'Found SMS reminders reduced no-shows by 6.9 percentage points',
        'Built interactive dashboard for operational insights'
      ],
      github: 'https://github.com/it23223394/Hospital-Appointment-No-Show-Analysis',
      demo: '#',
    },
    {
      title: 'LinkedIn Job Market Analysis',
      subtitle: 'Workforce Trends & Salary Insights',
      description: 'Cleaned and standardized large job-posting datasets. Analyzed salary trends, remote work patterns, and role demand using statistical techniques.',
      tech: ['Python', 'Pandas', 'Jupyter Notebook', 'Matplotlib', 'WordCloud'],
      highlights: [
        'Cleaned & standardized job-posting datasets with duplicate detection',
        'Analyzed salary trends and remote work patterns',
        'Generated visual reports for workforce trend analysis'
      ],
      github: 'https://github.com/it23223394/linkedin-job-analysis',
      demo: '#',
      date: 'Jan 2026',
      gradient: 'from-purple-500 via-fuchsia-500 to-pink-400',
    },
    {
      title: 'Workplace Productivity & Well-Being Analysis',
      subtitle: 'Employee Survey Statistical Study',
      description: 'Analyzed survey data from 80 HORDI employees to study relationships between grievance management, job satisfaction, and productivity.',
      tech: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn'],
      highlights: [
        'Applied stratified sampling and hypothesis testing (p < 0.001)',
        'Identified supervisor feedback as key productivity driver',
        'Generated comprehensive statistical findings and visualizations'
      ],
      github: 'https://github.com/it23223394/Workplace-Productivity-Analysis',
      demo: '#',
      date: 'Jul–Nov 2024',
      gradient: 'from-emerald-500 via-teal-400 to-cyan-400',
    },
    {
      title: 'AI Study Assistant',
      subtitle: 'RAG-Based PDF Q&A System',
      description: 'Developed an intelligent tutor that answers questions from course PDFs using RAG with semantic search and LLM integration.',
      tech: ['Python', 'Streamlit', 'Groq LLM', 'RAG', 'Vector Embeddings'],
      highlights: [
        'Built PDF processing pipeline with local embeddings',
        'Integrated Groq API for answer generation',
        'Implemented semantic search for document retrieval'
      ],
      github: 'https://github.com/it23223394/ai-study-assistant',
      demo: 'https://ai-study-assistant-crqnrkbffdabry9uxyjc7z.streamlit.app/',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
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
            A selection of data analytics and AI projects showcasing my skills in Python, SQL, statistical analysis, and data visualization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/90 dark:bg-gray-800/90 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.35)] backdrop-blur transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-500"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{project.date}</p>
                    <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-50">{project.title}</h3>
                    <p className="text-primary-500 font-semibold text-sm">{project.subtitle}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform`}>
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
