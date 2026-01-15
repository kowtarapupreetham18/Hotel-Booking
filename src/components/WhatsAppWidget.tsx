"use client"

import React from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppWidget() {
    return (
        <a
            href="https://wa.me/9000007955"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 z-50 flex items-center justify-center"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="absolute -top-2 -right-2 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
            </span>
        </a>
    )
}
