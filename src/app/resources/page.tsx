'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ResourcesPage() {
  const [volunteerName, setVolunteerName] = useState('')
  const [volunteerEmail, setVolunteerEmail] = useState('')
  const [eventType, setEventType] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [partnerName, setPartnerName] = useState('')
  const [partnerEmail, setPartnerEmail] = useState('')
  const [eventRequest, setEventRequest] = useState('')
  const [chapterRegion, setChapterRegion] = useState('')
  const [volunteerSuccess, setVolunteerSuccess] = useState(false)
  const [partnerSuccess, setPartnerSuccess] = useState(false)

  useEffect(() => {
    if (volunteerSuccess) {
      const timer = setTimeout(() => {
        setVolunteerSuccess(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [volunteerSuccess])

  useEffect(() => {
    if (partnerSuccess) {
      const timer = setTimeout(() => {
        setPartnerSuccess(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [partnerSuccess])

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('RSVP submitted')
    setVolunteerName('')
    setVolunteerEmail('')
    setEventType('')
    setEventLocation('')
    setVolunteerSuccess(true)
  }

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Partnership request submitted')
    setPartnerName('')
    setPartnerEmail('')
    setEventRequest('')
    setChapterRegion('')
    setPartnerSuccess(true)
  }

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
          <div className="mt-16 sm:mt-8 space-y-8">
            {/* Upcoming Events */}
            <Card className="bg-white bg-opacity-95 shadow-xl transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-800">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6 text-center">
                  <li className="pb-4 border-b border-gray-200">
                    <h3 className="font-semibold text-black">IN PROGRESS</h3>
                    <p className="text-sm text-gray-600">Date: TBD | Location: TBD</p>
                    <p className="text-sm text-gray-600 mb-2">Join our mail list to be notified of upcoming events</p>
                    <Button variant="outline" size="sm">RSVP Now</Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
              {/* Event/Volunteer Sign-ups */}
              <Card className="bg-white bg-opacity-95 shadow-xl transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center text-gray-800">Event/Volunteer Sign-up</CardTitle>
                </CardHeader>
                <CardContent>
                  {volunteerSuccess && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                      Sign-up successful! We'll be in touch soon.
                    </div>
                  )}
                  <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="volunteerName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input 
                        id="volunteerName"
                        value={volunteerName}
                        onChange={(e) => setVolunteerName(e.target.value)}
                        required
                        className="w-full bg-white text-black"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="volunteerEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input 
                        id="volunteerEmail"
                        type="email"
                        value={volunteerEmail}
                        onChange={(e) => setVolunteerEmail(e.target.value)}
                        required
                        className="w-full bg-white text-black"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                      <Select value={eventType} onValueChange={setEventType}>
                        <SelectTrigger className="w-full bg-white">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in-person">In-Person Event</SelectItem>
                          <SelectItem value="webinar">National Webinar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {eventType === 'in-person' && (
                      <div>
                        <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1">Chapter Location</label>
                        <Input 
                          id="eventLocation"
                          value={eventLocation}
                          onChange={(e) => setEventLocation(e.target.value)}
                          className="w-full bg-white text-black"
                          placeholder="Enter your local chapter"
                        />
                      </div>
                    )}
                    <Button 
                      type="submit" 
                      className="w-full bg-white text-black border border-black hover:bg-gray-100"
                    >
                      Sign Up
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Partnership Opportunities */}
              <Card className="bg-white bg-opacity-95 shadow-xl transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center text-gray-800">Partnership Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  {partnerSuccess && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                      Partnership request submitted successfully! We'll get back to you soon.
                    </div>
                  )}
                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="partnerName" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                      <Input 
                        id="partnerName"
                        value={partnerName}
                        onChange={(e) => setPartnerName(e.target.value)}
                        required
                        className="w-full bg-white text-black"
                        placeholder="Organization Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="partnerEmail" className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                      <Input 
                        id="partnerEmail"
                        type="email"
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        required
                        className="w-full bg-white text-black"
                        placeholder="contact@organization.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">Request Type</label>
                      <Select value={eventRequest} onValueChange={setEventRequest}>
                        <SelectTrigger className="w-full bg-white">
                          <SelectValue placeholder="Select request type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="webinar">Host Webinar</SelectItem>
                          <SelectItem value="chapter">New Chapter Request</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {eventRequest === 'webinar' && (
                      <div>
                        <label htmlFor="chapterRegion" className="block text-sm font-medium text-gray-700 mb-1">Target Region</label>
                        <Input 
                          id="chapterRegion"
                          value={chapterRegion}
                          onChange={(e) => setChapterRegion(e.target.value)}
                          className="w-full bg-white text-black"
                          placeholder="Specify target region"
                        />
                      </div>
                    )}
                    <Button 
                      type="submit" 
                      className="w-full bg-white text-black border border-black hover:bg-gray-100"
                    >
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-white text-center text-lg">
              Current forms do not work. We apologize for the inconvenience and are working to fully implement them. In the meantime please email all required information to IsoInitiative@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}