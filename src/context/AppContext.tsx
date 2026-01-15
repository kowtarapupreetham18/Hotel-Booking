"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { translations as translationsDict } from "@/lib/translations"

type Language = "en" | "te"
type Theme = "light" | "dark"

interface AppContextType {
    language: Language
    setLanguage: (lang: Language) => void
    theme: Theme
    toggleTheme: () => void
    t: typeof translationsDict.en
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme
        if (savedTheme) {
            setTheme(savedTheme)
            if (savedTheme === "dark") document.documentElement.classList.add("dark")
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        }

        const savedLang = localStorage.getItem("lang") as Language
        if (savedLang) setLanguage(savedLang)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem("lang", lang)
    }

    const t = translationsDict[language]

    return (
        <AppContext.Provider value={{ language, setLanguage: handleSetLanguage, theme, toggleTheme, t }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider")
    }
    return context
}
