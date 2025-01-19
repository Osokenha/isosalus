import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/backgroundimage.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold text-center mb-12 text-white">About IsoSalus Initiative</h1>
          <Card className="mb-8 bg-white bg-opacity-90">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Our Vision:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">
                We are dedicated to building a future where every individual in underserved communities has access to quality healthcare and basic needs, supported by the dedication and compassion of the next generation of healthcare leaders. We strive to create a sustainable support network for marginalized populations through education, advocacy, and service, ensuring a healthier and equitable environment and fostering the tradition of giving back to the community. We envision every underserved community having access to the care and resources needed to thrive. Through collaborative fundraising and health awareness initiatives with healthcare professionals of various fields, such as pharmacists, physicians, PAs, and dedicated volunteer support, we aim to bridge the healthcare gap and ensure that all individuals can lead healthy, fulfilling lives regardless of their background.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white bg-opacity-90">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Our Mission:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">
                Our mission is to empower underserved communities across the USA by engaging and inspiring high school students and first-generation pre-health undergraduates to actively participate in creating a healthier, more equitable society. Through partnerships with colleges and affiliates, we provide opportunities for students to contribute to health awareness campaigns, fundraising projects, and volunteering events, addressing healthcare gaps for both women and men. Our ambassadors collaborate to foster a meaningful community impact, aiming to improve access to essential health services and education for those in need.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white bg-opacity-90">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Leadership:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Montclair University</li>
                <li>Rutgers University - Newark</li>
                <li>New Jersey Institure of Technology</li>
                <li>University of Columbia</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white bg-opacity-90">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Past Events:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>No events yet. (Join our mail list to be ready for our first!) </li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}