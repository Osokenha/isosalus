'use client'

import { useState } from 'react'
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

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('RSVP submitted')
    setVolunteerName('')
    setVolunteerEmail('')
    setEventType('')
    setEventLocation('')
  }

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Partnership request submitted')
    setPartnerName('')
    setPartnerEmail('')
    setEventRequest('')
    setChapterRegion('')
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
      <div className="z-10 container mx-auto px-4 py-8 mt-24">
        {/* Upcoming Events */}
        <Card className="mb-12 bg-white bg-opacity-95 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6 text-center">
              <li className="pb-4 border-b border-gray-200">
                <h3 className="font-semibold text-black">Community Health Fair</h3>
                <p className="text-sm text-gray-600">Date: August 15, 2023 | Location: Central Park</p>
                <p className="text-sm text-gray-600 mb-2">Free health screenings and wellness workshops for all.</p>
                <Button variant="outline" size="sm">RSVP Now</Button>
              </li>
              <li className="pb-4 border-b border-gray-200">
                <h3 className="font-semibold text-black">Youth Mentorship Program Launch</h3>
                <p className="text-sm text-gray-600">Date: September 1, 2023 | Location: Community Center</p>
                <p className="text-sm text-gray-600 mb-2">Kickoff event for our new youth mentorship initiative.</p>
                <Button variant="outline" size="sm">RSVP Now</Button>
              </li>
              <li>
                <h3 className="font-semibold text-black">Annual Charity Gala</h3>
                <p className="text-sm text-gray-600">Date: October 10, 2023 | Location: Grand Hotel</p>
                <p className="text-sm text-gray-600 mb-2">Join us for an evening of fundraising and celebration.</p>
                <Button variant="outline" size="sm">RSVP Now</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Event/Volunteer Sign-ups */}
          <Card className="bg-white bg-opacity-95 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800">Event/Volunteer Sign-up</CardTitle>
            </CardHeader>
            <CardContent>
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
          <Card className="bg-white bg-opacity-95 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800">Partnership Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
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
                      <SelectItem value="webinar text-black">Host Webinar</SelectItem>
                      <SelectItem value="chapter text-black">New Chapter Request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {eventRequest === 'webinar text-black' && (
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
      </div>
    </div>
  )
}