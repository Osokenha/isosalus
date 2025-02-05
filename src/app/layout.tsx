import './globals.css'
import { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { HomeIcon, InfoIcon, BookOpenIcon, HeartIcon, MailIcon } from 'lucide-react'
import React from 'react'; // Import React

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IsoSalus Initiative',
  description: 'Serving Underserved Communities Across the USA',
  // Remove any manual favicon configuration here - Next.js will handle it automatically
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={merriweather.className}>
      <body className={merriweather.className}>
        <div className="min-h-screen flex flex-col relative">
          <header className="absolute top-0 left-0 right-0 z-50">
            <div className="w-full px-2 sm:px-4 py-4 flex items-center justify-between">
              <div className="flex items-center flex-grow">
                <Image 
                  src="/logo.png" 
                  alt="IsoSalus Initiative Logo" 
                  width={65} 
                  height={65} 
                  className="mr-2"
                />
                <h1 className="text-3xl font-bold text-white">IsoSalus Initiative</h1>
              </div>
              <nav className="flex space-x-1 sm:space-x-4">
                <Button variant="ghost" asChild size="sm" className="text-white hover:bg-white/10">
                  <Link href="/"><HomeIcon className="mr-2 h-4 w-4" /> Home</Link>
                </Button>
                <Button variant="ghost" asChild size="sm" className="text-white hover:bg-white/10">
                  <Link href="/about"><InfoIcon className="mr-2 h-4 w-4" /> About Us</Link>
                </Button>
                <Button variant="ghost" asChild size="sm" className="text-white hover:bg-white/10">
                  <Link href="/resources"><BookOpenIcon className="mr-2 h-4 w-4" /> Resources</Link>
                </Button>
                <Button variant="ghost" asChild size="sm" className="text-white hover:bg-white/10">
                  <Link href="/donate"><HeartIcon className="mr-2 h-4 w-4" /> Donate</Link>
                </Button>
                <Button variant="ghost" asChild size="sm" className="text-white hover:bg-white/10">
                  <Link href="/contact"><MailIcon className="mr-2 h-4 w-4" /> Contact Us/Sign Up</Link>
                </Button>
              </nav>
            </div>
          </header>
          <main className="flex-grow relative">
            {children}
          </main>
          <footer className="bg-gray-800 text-white py-8 relative z-10">
  <div className="w-full px-4 sm:px-6 lg:px-8 text-center space-y-4">
    <p>&copy; 2025 IsoSalus Initiative. All rights reserved.</p>
    <div className="flex justify-center items-center space-x-4">
      <a
        href="https://www.instagram.com/isi_initiative?utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-instagram"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
    </div>
  </div>
</footer>
        </div>
      </body>
    </html>
  )
}