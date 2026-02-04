"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { useAppContext } from "@/context/AppContext"

const images = [
    "/hero_bg.png",
    "/deluxe_suite_1.png",
    "/deluxe_suite_2.png",
    "/premium_single_1.png",
    "/premium_single_2.png",
    "/garden_suite.png",
    "/luxury_bathroom.png",
    "/uploaded_image_4_1768498696649.jpg",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200",
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
