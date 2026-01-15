"use client"

import React from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Rooms } from "@/components/Rooms"
import { Gallery } from "@/components/Gallery"
import { Location } from "@/components/Location"
import { Testimonials } from "@/components/Testimonials"
import { Booking } from "@/components/Booking"
import { Footer } from "@/components/Footer"
import { WhatsAppWidget } from "@/components/WhatsAppWidget"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

// Mock Stripe public key
const stripePromise = loadStripe("pk_test_51Pxxxxxxxxxxxxxxxxxxxxxx")

export default function Home() {
  return (
    <Elements stripe={stripePromise}>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Rooms />
        <Gallery />
        <Location />
        <Testimonials />
        <Booking />
        <Footer />
        <WhatsAppWidget />
      </main>
    </Elements>
  )
}
