"use client"

import React from "react"
import { motion } from "framer-motion"
import { MapPin, Train, Plane, Car, Navigation } from "lucide-react"
import { useAppContext } from "@/context/AppContext"

export function Location() {
    const { t } = useAppContext()

    return (
        <section id="location" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent uppercase tracking-widest font-bold mb-4">{t.nav.location}</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8">In the Heart of Tirupati</h3>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            Perfectly situated in Tummallagunta, our homestay offers a peaceful sanctuary while keeping you close to the spiritual energy of Tirumala and the convenience of Tirupati city.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                                    <Train size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">5km from Railway Station</h4>
                                    <p className="text-muted-foreground">Easy access for pilgrims arriving by train from across India.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                                    <Navigation size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">8km from Tirumala Temple</h4>
                                    <p className="text-muted-foreground">Quick and convenient travel to the foothills for your holy darshan.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                                    <Car size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">How to Reach</h4>
                                    <p className="text-muted-foreground">Taxis and buses are readily available. We also offer free pickup services for our guests.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://share.google/AIWZHRAKyPmbTdAHs"
                            target="_blank"
                            className="mt-12 inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg"
                        >
                            <MapPin size={22} /> Get Directions on Google Maps
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-background"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.324316377771!2d79.37893976211843!3d13.626771343734047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1a41639d49%3A0x73b0647895e63892!2sTummala%20Gunta%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1705352000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
