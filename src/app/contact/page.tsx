'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted')
    setShowSuccess(true)
    // Clear form fields
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
    setIsSubscribed(false)
    // Hide the success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      <Image
        src="/backgroundimage.jpg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 w-full max-w-2xl px-4 py-8 mt-16">
        <Card className="bg-white bg-opacity-95 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold text-center text-gray-800">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <Input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required 
                    className="w-full bg-white text-black" 
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <Input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required 
                    className="w-full bg-white text-black" 
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-white text-black" 
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  required 
                  className="w-full bg-white text-black resize-vertical" 
                  style={{ maxHeight: '12rem' }}
                  placeholder="Let us know how we can help..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={500}
                />
              </div>
              <div className="flex items-center justify-between">
                <Button 
                  type="submit" 
                  className="bg-white text-black border border-black hover:bg-gray-100 px-6 py-2"
                >
                  Send Message
                </Button>
                <div className="flex items-center">
                  <Checkbox
                    id="subscribe"
                    checked={isSubscribed}
                    onCheckedChange={(checked: boolean | "indeterminate") => setIsSubscribed(checked === true)}
                    className="mr-2 h-4 w-4"
                  />
                  <label 
                    htmlFor="subscribe" 
                    className="text-sm text-gray-700"
                  >
                    Sign up for mailing list
                  </label>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="relative z-10 mt-4 text-white text-center max-w-2xl px-4">
      The contact form does not work at the moment. Please send all emails to IsoInitiative@gmail.com for the time being. We will answer you as soon as possible. In your email please also let us know if you would like to join the mail list to be notified of upcoming events.
      </div>
    </div>
  )
}