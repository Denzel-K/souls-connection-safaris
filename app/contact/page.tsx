"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Clock3, Leaf, Shield, MapPin, Phone, Mail, MessageCircle } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Instant connection with your hosts",
    action: "Message us",
    href: "https://wa.me/254700000000",
    availability: "Available 24/7"
  },
  {
    icon: Phone,
    title: "Phone Call",
    description: "15-20 minute consultation",
    action: "Schedule call",
    href: "/schedule",
    availability: "Mon-Fri, 9AM-6PM EAT"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Detailed inquiries and planning",
    action: "Send email",
    href: "mailto:hello@soulsconnectionsafaris.com",
    availability: "Response within 24 hours"
  }
]

const reasons = [
  {
    title: "Journey Planning",
    description: "Discuss your vision, preferences, and create a personalized safari experience"
  },
  {
    title: "Destination Guidance",
    description: "Get expert advice on the best locations and timing for your interests"
  },
  {
    title: "Special Occasions",
    description: "Plan celebrations, proposals, anniversaries, or family milestones"
  },
  {
    title: "Group Coordination",
    description: "Organize multi-generational trips or small group experiences"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    preferredContact: "email"
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    if (!formData.name.trim()) nextErrors.name = "Please enter your name"
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address"
    }
    if (!formData.subject.trim()) nextErrors.subject = "Please enter a subject"
    if (!formData.message.trim()) nextErrors.message = "Please enter your message"
    
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("sending")
    
    // Simulate form submission
    setTimeout(() => {
      setStatus("success")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-lux-bone text-lux-ink">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-lux-accent"
          >
            Connect with your hosts
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-niconne text-5xl text-lux-forest"
          >
            Talk to a Host
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-lux-ink opacity-80 max-w-3xl mx-auto"
          >
            Share your vision, ask questions, or simply explore what's possible. 
            Your hosts George and Wambui are here to listen and guide you toward the perfect safari experience.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-lux-ink opacity-70"
          >
            <span>Personal consultation</span>
            <span>•</span>
            <span>Expert guidance</span>
            <span>•</span>
            <span>No pressure, just clarity</span>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="font-niconne text-3xl text-lux-forest mb-4">Choose Your Preferred Way to Connect</h2>
            <p className="text-lux-ink/70">Each method connects you directly with your hosts for personalized guidance</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="border border-lux-sand bg-white/90 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)] hover:shadow-[0_30px_80px_rgba(30,30,28,0.12)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <method.icon className="w-6 h-6 text-lux-accent" />
                  <h3 className="font-niconne text-xl text-lux-forest">{method.title}</h3>
                </div>
                <p className="text-lux-ink/80 mb-4">{method.description}</p>
                <div className="text-xs text-lux-accent mb-6 bg-lux-shell/30 px-3 py-2">
                  {method.availability}
                </div>
                <Link
                  href={method.href}
                  className="inline-block w-full text-center border border-lux-forest px-4 py-3 text-sm hover:bg-lux-forest hover:text-white transition-colors"
                >
                  {method.action}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1fr_0.4fr]">
          {/* Contact Form */}
          <div className="border border-lux-sand bg-lux-bone/30 p-10">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 bg-lux-forest/10 border border-lux-forest/20 mx-auto flex items-center justify-center">
                  <Mail className="w-8 h-8 text-lux-forest" />
                </div>
                <h3 className="font-niconne text-3xl text-lux-forest">Message Received</h3>
                <p className="text-lux-ink/80">
                  Thank you for reaching out. George or Wambui will respond to your message within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    href="/booking" 
                    className="border border-lux-forest px-6 py-3 text-sm hover:bg-lux-forest hover:text-white transition-colors"
                  >
                    Plan Your Journey
                  </Link>
                  <Link 
                    href="/journeys" 
                    className="border border-lux-accent px-6 py-3 text-sm hover:bg-lux-accent hover:text-white transition-colors"
                  >
                    Browse Journeys
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-niconne text-3xl text-lux-forest mb-2">Send a Message</h3>
                  <p className="text-lux-ink/70">Share your thoughts, questions, or vision with us</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-lux-forest mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-lux-stone bg-white px-4 py-3 focus:border-lux-forest focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-lux-forest mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-lux-stone bg-white px-4 py-3 focus:border-lux-forest focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-lux-forest mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border border-lux-stone bg-white px-4 py-3 focus:border-lux-forest focus:outline-none transition-colors"
                    placeholder="What would you like to discuss?"
                  />
                  {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-lux-forest mb-2">Preferred Contact Method</label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full border border-lux-stone bg-white px-4 py-3 focus:border-lux-forest focus:outline-none transition-colors"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-lux-forest mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full border border-lux-stone bg-white px-4 py-3 focus:border-lux-forest focus:outline-none transition-colors resize-none"
                    placeholder="Share your vision, ask questions, or tell us what you're hoping to experience..."
                  />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-lux-forest py-4 text-sm uppercase tracking-[0.3em] text-white disabled:opacity-60 hover:bg-lux-forest/90 transition-colors"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                <div className="flex flex-wrap gap-4 text-sm text-lux-ink opacity-70 pt-2">
                  <span className="inline-flex items-center gap-2">
                    <Shield className="h-4 w-4" /> Secure & private
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" /> Response within 24 hours
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Leaf className="h-4 w-4" /> Personal attention
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <aside className="space-y-8">
            <div className="border border-lux-sand bg-white/70 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)]">
              <h4 className="font-niconne text-xl text-lux-forest mb-4">Why Connect with a Host?</h4>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index}>
                    <h5 className="font-semibold text-lux-forest text-sm mb-1">{reason.title}</h5>
                    <p className="text-sm text-lux-ink/70">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-lux-sand bg-white/70 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)]">
              <h4 className="font-niconne text-xl text-lux-forest mb-4">Meet Your Hosts</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-lux-forest text-sm">George & Wambui</h5>
                  <p className="text-sm text-lux-ink/70">
                    Your dedicated safari hosts with deep knowledge of East Africa's landscapes, 
                    wildlife, and cultural connections.
                  </p>
                </div>
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-sm text-lux-forest border-b border-lux-accent hover:text-lux-accent transition-colors"
                >
                  Learn more about your hosts →
                </Link>
              </div>
            </div>

            <div className="border border-lux-sand bg-white/70 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)]">
              <h4 className="font-niconne text-xl text-lux-forest mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm text-lux-ink/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency only</span>
                </div>
                <div className="pt-2 border-t border-lux-sand/50">
                  <div className="flex items-center gap-2 text-lux-accent">
                    <MapPin className="w-4 h-4" />
                    <span>East Africa Time (EAT)</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
