'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'Java', level: 70 },
      ],
    },
    {
      category: 'Data Analysis & Libraries',
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'SciPy & Statistics', level: 85 },
      ],
    },
    {
      category: 'Data Visualization',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Excel Dashboards', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Plotly & Dash', level: 80 },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'Database Design', level: 80 },
      ],
    },
    {
      category: 'Analytics Tools & Platforms',
      skills: [
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'Microsoft Azure', level: 70 },
        { name: 'Statistical Analysis', level: 85 },
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Analytical Thinking', level: 90 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Data Storytelling', level: 80 },
        { name: 'Communication', level: 85 },
      ],
    },
  ]

  const tools = [
    'Python', 'SQL', 'Power BI', 'Excel', 'Jupyter', 'GitHub', 'Pandas', 'Matplotlib'
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.06),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.06),transparent_30%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for data analytics, visualization, and statistical analysis
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/90 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.55)] backdrop-blur relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-400 opacity-70" aria-hidden />
              <h3 className="text-xl font-bold mb-4 text-primary-500">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 rounded-full font-medium bg-white/70 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 shadow-sm hover:-translate-y-0.5 transition-transform"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
