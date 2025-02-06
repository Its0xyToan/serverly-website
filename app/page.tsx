"use client";

import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Discover from "../components/Discover"
import Help from "../components/Help"
import GlowBar from "@/components/Glowbar";
import { useEffect, useState } from "react";
import { useStats } from "@/lib/StatsProvider";

export interface APIData {
    guildCount: number,
    version: string
}

export default function Home() {
    
    const stats: any = useStats()

    useEffect(() => {
        async function fetchData() {
            fetch("https://api.serverly.tech/api/botinfos").then(async d => {
                const data = await d.json()
                stats.setData(data.data)
                stats.setLoading(false)
            }).catch(async e => {
                console.error(e)
                stats.setError(true)
                stats.setLoading(false)
            })
        }

        fetchData()
    }, [])
    
    return (
        <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <Hero />
            <GlowBar />
            <Stats/>
            <Discover />
            <Help />
        </main>
    )
}

