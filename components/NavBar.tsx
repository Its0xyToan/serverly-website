"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex items-center h-16 justify-between">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="ml-2 text-white text-xl font-semibold">Serverly</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-grow justify-center">
                        <div className="flex border border-gray-600 rounded-full overflow-hidden">
                            <NavLink href="#hero">Home</NavLink>
                            <NavLink href="#stats" className="border-l border-r border-gray-600">
                                Stats
                            </NavLink>
                            <NavLink href="#discover" className="border-r border-gray-600">
                                Discover
                            </NavLink>
                            <NavLink href="#help">Get Help</NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden ml-auto">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Placeholder for desktop to balance the layout */}
                    <div className="hidden md:flex flex-shrink-0 items-center">
                        <span className="text-xl font-semibold text-transparent">Placeholder</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <MobileNavLink href="#hero">Home</MobileNavLink>
                        <MobileNavLink href="#stats">Stats</MobileNavLink>
                        <MobileNavLink href="#discover">Discover</MobileNavLink>
                        <MobileNavLink href="#help">Get Help</MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

// @ts-ignore
const NavLink = ({ href, children, className = "" }) => (
    <Link
        href={href}
        className={`text-white hover:bg-white hover:bg-opacity-20 transition-colors px-6 py-2 ${className} flex items-center justify-center`}
    >
        {children}
    </Link>
)
// @ts-ignore
const MobileNavLink = ({ href, children }) => (
    <Link
        href={href}
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
        {children}
    </Link>
)

export default Navbar