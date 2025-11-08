"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Booking() {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    guests: "2",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        destination: "",
        startDate: "",
        endDate: "",
        guests: "2",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 3000)
  }

  const packages = [
    {
      name: "Serengeti Expedition",
      duration: "7 Days",
      price: "$3,499",
      highlights: ["Great Migration", "Hot Air Balloon Safari", "4-Star Lodge", "Expert Naturalists"],
      color: "green",
    },
    {
      name: "Photography Safari",
      duration: "5 Days",
      price: "$2,899",
      highlights: ["Professional Photography", "Golden Hour Shoots", "Wildlife Tracking", "Equipment Included"],
      color: "brown",
    },
    {
      name: "Luxury Retreat",
      duration: "10 Days",
      price: "$5,299",
      highlights: ["Ultra-Luxury Lodges", "Private Guides", "Gourmet Dining", "Spa & Wellness"],
      color: "brown",
    },
    {
      name: "Family Adventure",
      duration: "6 Days",
      price: "$2,599",
      highlights: ["Family-Friendly", "Educational Guides", "Safe Wildlife Viewing", "Kids' Activities"],
      color: "green",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-sm tracking-widest text-brown mb-6">BOOK YOUR ADVENTURE</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground font-bold mb-8 text-balance">
            Plan Your Perfect Safari
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Browse our curated experiences or build a custom adventure tailored to your dreams. Our team will help you
            select the perfect package.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="w-full py-20 md:py-32 px-6 bg-green/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4 text-balance">
              Tell Us About Your Dream Safari
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will create a personalized experience for you.
            </p>
          </div>

          {submitted && (
            <div className="mb-8 p-6 bg-green/10 border border-green text-foreground rounded-lg text-center">
              <p className="font-sans font-medium">
                Thank you! We received your inquiry. Our team will contact you within 24 hours.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 bg-background p-8 rounded-lg">
            {/* Trip Details */}
            <div>
              <h3 className="font-serif text-2xl text-foreground font-bold mb-6">Trip Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">Destination</label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-sans outline-none focus:border-brown transition-colors"
                  >
                    <option value="">Select a destination</option>
                    <option value="serengeti">Serengeti</option>
                    <option value="masai-mara">Masai Mara</option>
                    <option value="okavango">Okavango Delta</option>
                    <option value="victoria-falls">Victoria Falls</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-sans outline-none focus:border-brown transition-colors"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-sans outline-none focus:border-brown transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-sans outline-none focus:border-brown transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="font-serif text-2xl text-foreground font-bold mb-6">Your Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-sans outline-none focus:border-brown transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-sans outline-none focus:border-brown transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-sans outline-none focus:border-brown transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-sans outline-none focus:border-brown transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">Special Requests</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your preferences, interests, or any special requirements..."
                className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-sans outline-none focus:border-brown transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-brown text-background font-sans font-medium hover:bg-brown/90 transition-all duration-200 rounded text-lg"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="w-full py-20 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold text-balance">
              Why Book With Souls Connection
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Best Price Guarantee",
                description:
                  "We guarantee competitive pricing for all our safari packages with transparent cost breakdowns.",
              },
              {
                title: "24/7 Support",
                description:
                  "Our team is available around the clock to assist you before, during, and after your safari.",
              },
              {
                title: "Flexible Cancellation",
                description:
                  "We offer flexible cancellation policies to give you peace of mind when booking your adventure.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-2xl text-foreground font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
