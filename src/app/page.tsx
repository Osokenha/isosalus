import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/backgroundimage.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center p-8">
        <h1 className="text-7xl font-bold mb-20 text-white">Welcome to<br />IsoSalus Initiative</h1>
        <p className="text-2xl mb-8 text-white">"Serving Underserved Communities Across the USA"</p>
        <p className="text-xl mb-12 text-white">
          We empower high school students and first-generation pre-health undergraduates 
          to create a healthier, more equitable society through engagement and inspiration.
        </p>
        <Button asChild size="lg" className="bg-white text-black hover:bg-blue-100 hover:text-blue-700">
          <Link href="/about">Learn More About Us</Link>
        </Button>
      </div>
    </div>
  )
}