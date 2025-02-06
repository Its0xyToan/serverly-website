import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "../components/NavBar"
import type React from "react" // Added import for React
import { useEffect, useState } from "react"
import { StatsProvider } from "@/lib/StatsProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Serverly",
    description: "Make your server go to the next level with Serverly",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} bg-gray-900 text-white`}>
                <StatsProvider>
                    <Navbar />
                    {children}
                </StatsProvider>
            </body>
        </html>
    )
}

