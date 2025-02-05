import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "../components/NavBar"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Serverly - Your New Discord Bot Friend",
    description: "Discover Serverly, your new Discord bot companion",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} bg-gray-900 text-white`}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}

