"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Quote, Star } from "lucide-react"

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Family Traveler",
        text: "Exceeded every expectation! The service was truly 'beyond expectations'. The home-cooked food was a highlight of our trip.",
        rating: 5,
    },
    {
        name: "Rahul Verma",
        role: "Pilgrim",
        text: "Being so close to the temple and having a peaceful place to return to was amazing. The rooms are incredibly luxurious and clean.",
        rating: 5,
    },
    {
        name: "Ananya Reddy",
        role: "Business Traveler",
        text: "High-speed WiFi and calm surroundings made my work trip very productive. Highly recommended for short or long stays.",
        rating: 5,
    },
    {
        name: "Vikram Malhotra",
        role: "Couple",
        text: "The rooftop pool lounge at night is magical. Best homestay experience in Tirupati by far. The staff is very attentive.",
        rating: 5,
    },
    {
        name: "Sneha Kapur",
        role: "Solo Traveler",
        text: "Felt very safe and welcomed. The pickup service from the station was a breeze. I'll definitely be back next year.",
        rating: 5,
    },
    {
        name: "David Wilson",
        role: "International Tourist",
        text: "A beautiful blend of modern luxury and local hospitality. The yoga deck was my favorite spot for morning meditation.",
        rating: 5,
    },
]

export function Testimonials() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

    return (
        <section className="py-24 px-6 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-accent uppercase tracking-widest font-bold mb-4">Testimonials</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">What Our Guests Say</h3>
                </div>

                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex">
                        {testimonials.map((t, i) => (
                            <div key={i} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4 min-w-0">
                                <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl h-full border border-white/20 flex flex-col items-center text-center shadow-xl">
                                    <div className="bg-accent/20 p-4 rounded-full text-accent mb-6">
                                        <Quote size={32} />
                                    </div>
                                    <div className="flex gap-1 mb-6 text-accent">
                                        {[...Array(t.rating)].map((_, star) => (
                                            <Star key={star} size={18} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-lg italic mb-8 flex-grow">"{t.text}"</p>
                                    <div>
                                        <h4 className="text-xl font-bold">{t.name}</h4>
                                        <p className="text-white/60 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
