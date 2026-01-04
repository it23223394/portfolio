'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Users } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = {
    university: 'Sri Lanka Institute of Information Technology',
    degree: 'BSc (Hons) in Computer Science',
    period: '2023 - Present',
    status: '3rd Year',
    icon: GraduationCap,
  }

  const school = {
    name: 'Anula Vidyalaya, Nugegoda',
    achievements: [
      'GCE A/L (2022) - Physical Science Stream',
      'GCE O/L (2018)'
    ],
    period: '2008 - 2022',
    icon: GraduationCap,
  }

  const certifications = [
    {
      title: 'Python for Beginners',
      issuer: 'University of Moratuwa (CODL)',
      icon: Award,
    },
    {
      title: 'Python Programming',
      issuer: 'University of Moratuwa (CODL)',
      icon: Award,
    },
    {
      title: 'Introduction to Java',
      issuer: 'Sololearn',
      icon: Award,
    },
    {
      title: 'Upper-Intermediate English Course',
      issuer: 'British Council Sri Lanka',
      icon: Award,
    },
  ]

  const affiliations = [
    {
      organization: 'LEO Club of SLIIT',
      role: 'Member',
      description: 'Active member participating in community service and leadership development activities',
      icon: Users,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-primary-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic background and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education - University */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-800 p-8 rounded-2xl text-white shadow-xl border border-white/10"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <education.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-white/90">{education.degree}</h3>
                    <p className="text-white/70 font-medium">{education.university}</p>
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-white/80">
                    {education.status}
                  </span>
                </div>
                <p className="text-white/70 text-sm">{education.period}</p>
              </div>
            </div>
          </motion.div>

          {/* Education - School */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <school.icon className="text-primary-500" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{school.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{school.period}</p>
                <ul className="space-y-1">
                  {school.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cert.icon className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Professional Affiliations</h3>
          <div className="max-w-2xl mx-auto">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.organization}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <affiliation.icon className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{affiliation.organization}</h4>
                    <p className="text-primary-500 font-semibold text-sm mb-2">{affiliation.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{affiliation.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
