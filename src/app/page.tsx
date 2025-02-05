'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Image
        src="/backgroundimage.jpg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="max-w-4xl mx-auto mt-16 sm:mt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-400 mb-8">
              Welcome to<br />
              IsoSalus Initiative
            </h1>
            
            <p className="text-xl sm:text-2xl text-white font-semibold mb-8">
              &quot;Serving Underserved Communities Across the USA&quot;
            </p>
            
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-12">
              We empower high school students and first-generation pre-health undergraduates to create a healthier, more equitable society through engagement and inspiration.
            </p>
            
            <Link href="/about">
              <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}