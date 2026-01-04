import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sahaji Perera | Full-Stack Developer & Computer Science Student',
  description: 'Portfolio of Sahaji Perera - Full-Stack Developer specializing in AI-powered solutions, web development, and distributed systems. Seeking Software Engineering internship.',
  keywords: ['Sahaji Perera', 'Full-Stack Developer', 'Computer Science', 'SLIIT', 'React', 'Spring Boot', 'AI', 'Portfolio'],
  authors: [{ name: 'Sahaji Perera' }],
  openGraph: {
    title: 'Sahaji Perera | Full-Stack Developer',
    description: 'Building AI-powered solutions and scalable web applications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
