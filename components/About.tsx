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
      title: 'Data Analytics',
      description: 'Proficient in Python (Pandas, NumPy, Scikit-learn) and SQL for data cleaning, statistical analysis, and predictive modeling',
    },
    {
      icon: Brain,
      title: 'Data Visualization',
      description: 'Expert in Power BI dashboards, Excel reporting, and Python visualization tools (Matplotlib, Plotly, Dash)',
    },
    {
      icon: Rocket,
      title: 'Statistical Analysis',
      description: 'Strong foundation in hypothesis testing, feature engineering, and deriving actionable insights from data',
    },
    {
      icon: Users,
      title: 'Problem Solving',
      description: 'Analytical mindset with excellent communication skills for presenting insights to stakeholders',
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
              Turning Data into Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I&apos;m a 3rd-year Computer Science student at SLIIT with a strong focus on data analytics.
              My journey has led me from full-stack development to discovering my passion for transforming 
              raw data into meaningful insights that drive decision-making.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I specialize in Python-based analytics, SQL querying, statistical analysis, and creating 
              interactive dashboards using Power BI and modern visualization tools. Whether analyzing 
              hospital appointment patterns or LinkedIn job market trends, I thrive on extracting stories 
              from data.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Currently seeking a <span className="text-primary-500 font-semibold">Data Analytics Internship</span> where 
              I can apply my analytical skills to real-world projects and contribute to data-driven insights.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">110K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Records Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tech Tools</div>
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
