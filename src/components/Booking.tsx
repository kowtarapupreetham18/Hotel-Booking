"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Calendar, Users, Home, User, Mail, Phone, Lock, MessageCircle } from "lucide-react"
import { useAppContext } from "@/context/AppContext"

type BookingFormData = {
    name: string
    email: string
    phone: string
    roomType: string
    guests: number
    checkIn: Date
    checkOut: Date
}

export function Booking() {
    const { t } = useAppContext()
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)

    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<BookingFormData>({
        defaultValues: {
            checkIn: new Date(),
            checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
            guests: 1,
            roomType: "deluxe-double"
        }
    })

    const checkInDate = watch("checkIn")
    const checkOutDate = watch("checkOut")

    const onSubmit = async (data: BookingFormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log("Form Data:", data)
        setIsSubmitSuccessful(true)
    }

    return (
        <section id="booking" className="py-24 px-6 bg-background relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-accent uppercase tracking-widest font-bold mb-4">{t.nav.book}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">{t.booking.title}</h3>
                    <p className="text-muted-foreground flex items-center justify-center gap-2">
                        <Lock size={16} /> Secure reservation guaranteed
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-background border border-border rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative"
                >
                    {isSubmitSuccessful ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className="bg-green-100 dark:bg-green-900/30 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
                                <CheckCircle size={64} />
                            </div>
                            <h4 className="text-3xl font-bold mb-4 text-foreground">Booking Request Sent!</h4>
                            <p className="text-muted-foreground text-lg mb-10">
                                Thank you for choosing Sri Sakthi Homestay. <br />
                                A confirmation email has been sent to your email address. <br />
                                Our team will contact you shortly to finalize details.
                            </p>
                            <button
                                onClick={() => setIsSubmitSuccessful(false)}
                                className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
                            >
                                Book Another Stay
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold flex items-center gap-2 px-1">
                                        <Calendar size={16} className="text-accent" /> {t.booking.checkIn}
                                    </label>
                                    <DatePicker
                                        selected={checkInDate}
                                        onChange={(date: Date | null) => setValue("checkIn", date as Date)}
                                        selectsStart
                                        startDate={checkInDate}
                                        endDate={checkOutDate}
                                        minDate={new Date()}
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold flex items-center gap-2 px-1">
                                        <Calendar size={16} className="text-accent" /> {t.booking.checkOut}
                                    </label>
                                    <DatePicker
                                        selected={checkOutDate}
                                        onChange={(date: Date | null) => setValue("checkOut", date as Date)}
                                        selectsEnd
                                        startDate={checkInDate}
                                        endDate={checkOutDate}
                                        minDate={checkInDate}
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold flex items-center gap-2 px-1">
                                        <Users size={16} className="text-accent" /> {t.booking.guests}
                                    </label>
                                    <select
                                        {...register("guests")}
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none"
                                    >
                                        {[1, 2, 3, 4].map(num => (
                                            <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold flex items-center gap-2 px-1">
                                        <Home size={16} className="text-accent" /> {t.booking.roomType}
                                    </label>
                                    <select
                                        {...register("roomType")}
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none"
                                    >
                                        <option value="deluxe-double">{t.rooms.doubleName}</option>
                                        <option value="premium-single">{t.rooms.singleName}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="border-t border-border pt-8 mt-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold flex items-center gap-2 px-1">
                                            <User size={16} className="text-accent" /> {t.booking.name}
                                        </label>
                                        <input
                                            {...register("name", { required: true })}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                        />
                                        {errors.name && <span className="text-red-500 text-xs px-2">Name is required</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold flex items-center gap-2 px-1">
                                            <Mail size={16} className="text-accent" /> {t.booking.email}
                                        </label>
                                        <input
                                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                        />
                                        {errors.email && <span className="text-red-500 text-xs px-2">Valid email is required</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold flex items-center gap-2 px-1">
                                        <Phone size={16} className="text-accent" /> {t.booking.phone}
                                    </label>
                                    <input
                                        {...register("phone", { required: true })}
                                        placeholder="+91 90000 07955"
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                    />
                                    {errors.phone && <span className="text-red-500 text-xs px-2">Phone number is required</span>}
                                </div>
                            </div>

                            <div className="flex flex-col sm:row gap-4 pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-accent text-accent-foreground py-5 rounded-2xl font-bold text-lg gold-gradient shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? "Processing..." : t.booking.submit}
                                </button>
                                <a
                                    href="https://wa.me/9000007955"
                                    target="_blank"
                                    className="flex-1 bg-green-500 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl"
                                >
                                    <MessageCircle size={24} /> {t.booking.whatsapp}
                                </a>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
