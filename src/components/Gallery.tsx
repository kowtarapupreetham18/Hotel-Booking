"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { useAppContext } from "@/context/AppContext"

const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200", // Hero / Exterior
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200", // Deluxe Room
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200", // Double Room
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200", // Single Room
    "https://images.unsplash.com/photo-1537726235470-8504e3bdb285?auto=format&fit=crop&q=80&w=1200", // Pool
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200", // Food/Dining
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200", // Resort View
    "https://images.unsplash.com/photo-1551882547-ff43c6163351?auto=format&fit=crop&q=80&w=1200", // Pillows/Details
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200", // Balcony
    "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200", // Terrace
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200", // Bathroom
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200", // Garden
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200", // Entrance
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1200", // Lobby
    "https://images.unsplash.com/photo-1495365200469-651151746257?auto=format&fit=crop&q=80&w=1200", // Tirupati View
]

export function Gallery() {
    const { t } = useAppContext()
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    const openLightbox = (index: number) => setLightboxIndex(index)
    const closeLightbox = () => setLightboxIndex(null)

    const showNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        setLightboxIndex(prev => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))
    }

    const showPrev = (e: React.MouseEvent) => {
        e.stopPropagation()
        setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))
    }

    return (
        <section id="gallery" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-accent uppercase tracking-widest font-bold mb-4">{t.nav.gallery}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold">A Glimpse of Happiness</h3>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="relative rounded-2xl overflow-hidden cursor-zoom-in group border border-border"
                            onClick={() => openLightbox(index)}
                        >
                            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                    <ZoomIn size={24} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-30"
                            onClick={closeLightbox}
                        >
                            <X size={32} />
                        </button>

                        <button
                            className="absolute left-6 text-white hover:text-accent transition-colors z-30 bg-white/5 p-4 rounded-full"
                            onClick={showPrev}
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            className="absolute right-6 text-white hover:text-accent transition-colors z-30 bg-white/5 p-4 rounded-full"
                            onClick={showNext}
                        >
                            <ChevronRight size={32} />
                        </button>

                        <motion.div
                            key={lightboxIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-full max-h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[lightboxIndex]}
                                className="max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                alt=""
                            />
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                                {lightboxIndex + 1} / {images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
