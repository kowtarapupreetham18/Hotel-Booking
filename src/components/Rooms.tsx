"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Bed, Bath, Coffee, Wifi, Maximize2, X } from "lucide-react"
import { useAppContext } from "@/context/AppContext"
import { cn } from "@/lib/utils"

interface Room {
    id: string
    name: string
    price: string
    capacity: number
    image: string
    features: string[]
    description: string
}

const rooms: Room[] = [
    ...Array(5).fill(null).map((_, i) => ({
        id: `double-${i}`,
        name: "Deluxe Double Suite",
        price: "₹3,500",
        capacity: 2,
        image: `https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200`,
        features: ["King Bed", "Garden View", "Mini-bar", "Work Desk", "Rain Shower"],
        description: "Experience the ultimate comfort in our Deluxe Double Suite. Offering a blend of elegance and modern amenities, this room features a plush king-sized bed, high-speed internet, and a private balcony overlooking the hills."
    })),
    ...Array(5).fill(null).map((_, i) => ({
        id: `single-${i}`,
        name: "Premium Single Room",
        price: "₹2,200",
        capacity: 1,
        image: `https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200`,
        features: ["Queen Bed", "Hill View", "Smart TV", "Coffee Maker", "Modern Bath"],
        description: "Our Premium Single Room is designed for the solo traveler who doesn't want to compromise on luxury. Compact yet spacious, it features everything you need for a restful stay."
    }))
]

export function Rooms() {
    const { t } = useAppContext()
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

    return (
        <section id="rooms" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-accent uppercase tracking-widest font-bold mb-4">{t.nav.rooms}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">{t.rooms.title}</h3>
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                        Carefully curated rooms designed to provide you with the ultimate rest and relaxation during your Tirupati pilgrimage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-3xl overflow-hidden shadow-xl border border-border group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1 rounded-full text-primary font-bold shadow-md">
                                    {room.price}<span className="text-sm font-normal text-muted-foreground">/night</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-2xl font-bold text-foreground">{room.name}</h4>
                                </div>
                                <div className="flex items-center space-x-4 mb-6 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><Users size={16} className="text-accent" /> {room.capacity} {t.rooms.capacity}</span>
                                    <span className="flex items-center gap-1"><Bed size={16} className="text-accent" /> {room.capacity === 2 ? "King" : "Queen"} Bed</span>
                                </div>
                                <ul className="space-y-2 mb-8">
                                    {room.features.slice(0, 3).map(feature => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setSelectedRoom(room)}
                                        className="flex-1 border-2 border-accent text-accent px-4 py-2 rounded-xl font-bold hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Maximize2 size={18} /> {t.rooms.viewDetails}
                                    </button>
                                    <a
                                        href="#booking"
                                        className="flex-1 bg-primary text-white px-4 py-2 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center text-center"
                                    >
                                        {t.rooms.bookNow}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Room Details Modal */}
            <AnimatePresence>
                {selectedRoom && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedRoom(null)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-4xl bg-background rounded-3xl overflow-hidden shadow-2xl flex flex-col md:row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedRoom(null)}
                                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-md transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <img src={selectedRoom.image} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                    <h3 className="text-3xl font-bold mb-2">{selectedRoom.name}</h3>
                                    <p className="text-accent text-xl font-bold mb-6">{selectedRoom.price} / night</p>
                                    <p className="text-muted-foreground mb-8 line-height-relaxed">{selectedRoom.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                        {selectedRoom.features.map(f => (
                                            <div key={f} className="flex items-center gap-3 text-sm font-medium">
                                                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                                                    {f.includes("WiFi") ? <Wifi size={16} /> : <Coffee size={16} />}
                                                </div>
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="#booking"
                                        onClick={() => setSelectedRoom(null)}
                                        className="w-full block text-center bg-accent text-accent-foreground py-4 rounded-2xl font-bold text-lg gold-gradient shadow-lg"
                                    >
                                        {t.rooms.bookNow}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
