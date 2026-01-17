"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Wifi,
    Waves,
    Utensils,
    ConciergeBell,
    Car,
    Zap,
    Flower2,
    Palmtree,
    Bath,
    Monitor,
    Leaf,
    Sun
} from "lucide-react"
import { useAppContext } from "@/context/AppContext"

const amenityIcons: Record<string, React.ReactNode> = {
    balconies: <Palmtree className="w-8 h-8" />,
    wifi: <Wifi className="w-8 h-8" />,
    showers: <Bath className="w-8 h-8" />,
    smart: <Monitor className="w-8 h-8" />,
    meals: <Utensils className="w-8 h-8" />,
    concierge: <ConciergeBell className="w-8 h-8" />,
    pickup: <Car className="w-8 h-8" />,
    ev: <Zap className="w-8 h-8" />,
    pool: <Waves className="w-8 h-8" />,
    yoga: <Flower2 className="w-8 h-8" />,
    garden: <Leaf className="w-8 h-8" />,
}

export function About() {
    const { t } = useAppContext()

    return (
        <section id="about" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent uppercase tracking-widest font-bold mb-4">{t.about.title}</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Unparalleled Luxury & <br />
                            <span className="gold-text-gradient underline decoration-accent/30 underline-offset-8 italic font-serif">Beyond Expectations</span>
                        </h3>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                            <p>{t.about.p3}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/uploaded_image_0_1768498696649.jpg"
                                alt="Luxury Suite"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent rounded-2xl hidden md:flex flex-col items-center justify-center text-accent-foreground p-6 shadow-xl gold-gradient">
                            <span className="text-4xl font-bold">12+</span>
                            <span className="text-center font-medium text-sm">Years of Hospitality Excellence</span>
                        </div>
                    </motion.div>
                </div>

                <div className="pt-12 border-t border-border">
                    <h3 className="text-3xl font-bold text-center mb-16">{t.amenities.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {Object.entries(t.amenities).filter(([key]) => key !== 'title').map(([key, label], index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-accent/40 transition-colors group"
                            >
                                <div className="mb-4 text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                                    {amenityIcons[key] || <Sun />}
                                </div>
                                <span className="text-sm font-semibold text-foreground/80">{label as string}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
