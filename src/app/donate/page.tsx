'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DonatePage() {
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
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10" />
      
      <div className="relative z-10 flex flex-col justify-center min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mt-16 sm:mt-8 max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Fundraising Campaigns */}
              <Card className="bg-white bg-opacity-95 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center text-gray-800">Fundraising Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Join our upcoming fundraising events to support our mission:
                  </p>
                  <ul className="space-y-4">
                    <li>
                      <h3 className="font-semibold text-black">IN PROGRESS</h3>
                      <p className="text-sm text-gray-600">Date: PLACEHOLDER</p>
                      <p className="text-sm text-gray-600">Location: PLACEHOLDER</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Right Column - Donation Information */}
              <Card className="bg-white bg-opacity-95 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center text-gray-800">Make a Donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Your generous donations help us continue our mission to serve underserved communities across the USA.
                  </p>
                  <p className="text-gray-600 mb-4">
                    To make a donation, please use one of the following methods:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-black">PayPal</h3>
                      <p className="text-sm text-gray-600">Send donations to: @---</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Venmo</h3>
                      <p className="text-sm text-gray-600">Send donations to: @---</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-600">
                    Please send with the Friends and Family option. For any questions about donations or to discuss other ways to contribute, please contact our fundraising team at IsoInitiative@gmail.com.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}