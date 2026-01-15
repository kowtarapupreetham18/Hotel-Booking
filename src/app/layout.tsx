import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppProvider } from "@/context/AppContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sri Sakthi Homestay - Luxury Stays in Tirupati | Beyond Expectations",
  description: "Experience premium boutique homestay luxury in Tummallagunta, Tirupati. Beyond expectations service for pilgrims, families, and business travelers.",
  keywords: ["homestay tirupati", "luxury stay tirupati", "sri sakthi homestay", "tummallagunta homestay", "best hotels tirupati"],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
