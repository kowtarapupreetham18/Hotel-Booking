"use client"

import React from "react"
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from "lucide-react"
import { useAppContext } from "@/context/AppContext"

export function Footer() {
    const { t } = useAppContext()

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-3xl font-bold gold-text-gradient mb-4">SS Homestay</h2>
                    <p className="max-w-md mb-6">
                        Beyond Expectations - Providing premium comfort and boutique luxury in the heart of Tirupati. We look forward to welcoming you to your home away from home.
                    </p>
                    <div className="flex space-x-4 text-accent">
                        <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">{t.footer.contact}</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                            <MapPin className="text-accent shrink-0" size={20} />
                            <span>Tummallagunta, Tirupati, Andhra Pradesh - 517502</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone className="text-accent shrink-0" size={20} />
                            <a href="tel:9000007955" className="hover:text-accent transition-colors">9000007955</a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail className="text-accent shrink-0" size={20} />
                            <a href="mailto:srisakthi2012@gmail.com" className="hover:text-accent transition-colors">srisakthi2012@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                        <li><a href="#rooms" className="hover:text-accent transition-colors">Our Rooms</a></li>
                        <li><a href="#booking" className="hover:text-accent transition-colors">Book Now</a></li>
                        <li><a href="https://share.google/AIWZHRAKyPmbTdAHs" target="_blank" className="hover:text-accent transition-colors">Location Map</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center text-sm">
                <p>© {new Date().getFullYear()} Sri Sakthi Homestay. All Rights Reserved.</p>
                <p className="mt-2 md:mt-0 opacity-60 italic">{t.footer.powered}</p>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-24 right-6 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-90 z-40"
            >
                <ArrowUp size={24} />
            </button>
        </footer>
    )
}
