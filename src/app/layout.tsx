import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { HomeIcon, InfoIcon, BookOpenIcon, HeartIcon, MailIcon } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IsoSalus Initiative',
  description: 'Serving Underserved Communities Across the USA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
              <p>&copy; 2023 IsoSalus Initiative. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}