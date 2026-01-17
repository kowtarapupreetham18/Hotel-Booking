"use client"

import React from "react"
import { motion } from "framer-motion"
import { useAppContext } from "@/context/AppContext"

export function Hero() {
    const { t } = useAppContext()

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Parallax effect */}
            <div
                className="absolute inset-0 z-0 parallax"
                style={{
                    backgroundImage: 'url("/uploaded_image_3_1768498696649.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-slate-950/40" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
                >
                    {t.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-100 mb-10 font-light tracking-wide drop-shadow-lg"
                >
                    {t.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:row justify-center gap-4"
                >
                    <a
                        href="#rooms"
                        className="bg-accent text-accent-foreground px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform gold-gradient"
                    >
                        {t.hero.ctaExplore}
                    </a>
                    <a
                        href="#booking"
                        className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all shadow-xl"
                    >
                        {t.hero.ctaBook}
                    </a>
                </motion.div>
            </div>

            {/* Decorative scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent to-transparent" />
            </motion.div>
        </section>
    )
}
