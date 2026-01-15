"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Languages, Menu, X, Phone } from "lucide-react"
import { useAppContext } from "@/context/AppContext"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "rooms", href: "#rooms" },
    { name: "gallery", href: "#gallery" },
    { name: "location", href: "#location" },
]

export function Navbar() {
    const { theme, toggleTheme, language, setLanguage, t } = useAppContext()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled || isMobileMenuOpen
                    ? "bg-background/80 backdrop-blur-md shadow-lg py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold gold-text-gradient"
                >
                    SS Homestay
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-foreground/80 hover:text-accent transition-colors capitalize font-medium"
                        >
                            {t.nav[item.name as keyof typeof t.nav]}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4">
                        <button
                            onClick={() => setLanguage(language === "en" ? "te" : "en")}
                            className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                            title="Switch Language"
                        >
                            <Languages size={20} className="text-accent" />
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                            title="Toggle Theme"
                        >
                            {theme === "light" ? <Moon size={20} className="text-primary" /> : <Sun size={20} className="text-accent" />}
                        </button>
                        <a
                            href="#booking"
                            className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
                        >
                            {t.nav.book}
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                    >
                        {theme === "light" ? <Moon size={20} className="text-primary" /> : <Sun size={20} className="text-accent" />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-foreground"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background overflow-hidden border-t mt-3"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-foreground/80 hover:text-accent capitalize"
                                >
                                    {t.nav[item.name as keyof typeof t.nav]}
                                </a>
                            ))}
                            <div className="flex items-center justify-between pt-4 border-t">
                                <button
                                    onClick={() => setLanguage(language === "en" ? "te" : "en")}
                                    className="flex items-center space-x-2 text-accent"
                                >
                                    <Languages size={20} />
                                    <span>{language === "en" ? "Telugu" : "English"}</span>
                                </button>
                                <a
                                    href="#booking"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold"
                                >
                                    {t.nav.book}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
