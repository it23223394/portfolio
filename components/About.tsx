'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Brain, Rocket, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Experienced in building scalable web applications with React, Spring Boot, and .NET',
    },
    {
      icon: Brain,
      title: 'AI & Innovation',
      description: 'Passionate about AI, RAG systems, and emerging technologies',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quick to adapt and eager to explore new technologies and frameworks',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative mindset with strong problem-solving and communication skills',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Building the Future, One Line at a Time
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a 3rd-year Computer Science undergraduate at SLIIT with a passion for creating 
              innovative solutions that make a difference. My journey in tech started with curiosity 
              and has evolved into a dedicated pursuit of excellence in software engineering.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              From building AI-powered reading assistants to developing distributed messaging systems, 
              I thrive on challenges that push the boundaries of what's possible. I'm particularly 
              interested in the intersection of AI, web development, and data analytics.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Currently seeking a <span className="text-primary-500 font-semibold">Software Engineering Internship</span> where 
              I can contribute to meaningful projects, learn from experienced professionals, and grow 
              as a developer.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">3rd</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Year Student</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-primary-500" size={24} />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
