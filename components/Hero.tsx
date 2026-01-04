'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/it23223394', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sahaji-perera-71a7b5345', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sahajiperera@gmail.com', label: 'Email' },
  ]

  const profilePhoto = '/sahaji.jpeg'

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Atmospheric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-0 w-[28rem] h-[28rem] bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_45%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 text-sm font-semibold border border-blue-200/60 dark:border-blue-800/60"
            >
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" aria-hidden />
              Hi, I&apos;m
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
            >
              Sahaji Perera
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200"
            >
              Computer Science Undergraduate crafting thoughtful, AI-forward products
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
            >
              I blend product thinking with full-stack engineering—shipping interfaces that feel polished and reliable systems behind them. Currently open to Software Engineering internships.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap gap-3"
            >
              {["AI-first builds", "Full-stack delivery", "Systems mindset"].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-xl bg-white/70 dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-700/70 shadow-sm text-sm font-medium text-gray-800 dark:text-gray-100"
                >
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-xl font-semibold border border-blue-300 text-blue-700 dark:text-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
              >
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-7 py-3 rounded-xl font-semibold bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-300 transition-all"
                  whileHover={{ y: -4 }}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/25 via-cyan-400/15 to-transparent blur-2xl" aria-hidden />
              <div className="relative rounded-3xl bg-white/80 dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-800/80 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] p-6 backdrop-blur">
                <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden ring-4 ring-blue-200/70 dark:ring-blue-900/60 shadow-xl">
                  <Image
                    src={profilePhoto}
                    alt="Portrait of Sahaji Perera"
                    fill
                    sizes="(min-width: 768px) 13rem, 11rem"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm text-gray-700 dark:text-gray-200">
                  {[{ label: 'Projects', value: '6+' }, { label: 'Tech Stack', value: '10+' }, { label: 'RAG/AI', value: 'Hands-on' }].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-gray-50 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 py-3">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-300">{item.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-dashed border-blue-200 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-900/20 p-4 text-sm text-blue-900 dark:text-blue-100 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden />
                  Actively seeking a Software Engineering Internship
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="#about"
            className="text-gray-500 dark:text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
