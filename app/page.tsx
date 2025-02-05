import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Discover from "../components/Discover"
import Help from "../components/Help"
import GlowBar from "@/components/Glowbar";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <Hero />
            <GlowBar />
            <Stats />
            <Discover />
            <Help />
        </main>
    )
}

