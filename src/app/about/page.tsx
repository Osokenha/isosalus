'use client'

import Image from 'next/image'

export default function AboutPage() {
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
      
      <div className="relative z-10 container mx-auto px-4 py-8 mt-28 sm:mt-24 space-y-12 text-white">
        <section className="space-y-4 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400">Our Vision:</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed"> {/* Updated text size */}
            We are dedicated to building a future where every individual in underserved communities has access to quality healthcare and basic needs, supported by the dedication and compassion of the next generation of healthcare leaders. We strive to create a sustainable support network for marginalized populations through education, advocacy, and service, ensuring a healthier and equitable environment and fostering the tradition of giving back to the community. We envision every underserved community having access to the care and resources needed to thrive. Through collaborative fundraising and health awareness initiatives with healthcare professionals of various fields, such as pharmacists, physicians, PAs, and dedicated volunteer support, we aim to bridge the healthcare gap and ensure that all individuals can lead healthy, fulfilling lives regardless of their background.
          </p>
        </section>

        <section className="space-y-4 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400">Our Mission:</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed"> {/* Updated text size */}
            Our mission is to empower underserved communities across the USA by engaging and inspiring high school students and first-generation pre-health undergraduates to actively participate in creating a healthier, more equitable society. Through partnerships with colleges and affiliates, we provide opportunities for students to contribute to health awareness campaigns, fundraising projects, and volunteering events, addressing healthcare gaps for both women and men. Our ambassadors collaborate to foster a meaningful community impact, aiming to improve access to essential health services and education for those in need.
          </p>
        </section>

        <section className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">Leadership:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            <div className="flex font-bold flex-col items-center text-center w-full max-w-xs">
              <Image
                src="/montclair.png"
                alt="Montclair University Icon"
                width={100}
                height={100}
                className="mb-2"
              />
              <span className="text-lg">Montclair University</span>
            </div>
            <div className="flex font-bold flex-col items-center text-center w-full max-w-xs">
              <Image
                src="/rutgersnewark.png"
                alt="Rutgers University Icon"
                width={100}
                height={100}
                className="mb-2"
              />
              <span className="text-lg">Rutgers University - Newark</span>
            </div>
            <div className="flex font-bold flex-col items-center text-center w-full max-w-xs">
              <Image
                src="/njit.png"
                alt="New Jersey Institute of Technology Icon"
                width={100}
                height={100}
                className="mb-2"
              />
              <span className="text-lg">New Jersey Institute of Technology</span>
            </div>
            <div className="flex font-bold flex-col items-center text-center w-full max-w-xs">
              <Image
                src="/columbia.png"
                alt="Columbia University Icon"
                width={100}
                height={100}
                className="mb-2"
              />
              <span className="text-lg">Columbia University</span>
            </div>
          </div>
        </section>

        <section className="space-y-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400">Past Events:</h2>
          <p className="text-lg italic pl-8">
            No events yet. (Join our mail list to be ready for our first!)
          </p>
        </section>
      </div>
    </div>
  )
}