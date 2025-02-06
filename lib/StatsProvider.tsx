"use client";

import { createContext, useContext, useState } from "react";

const Stats = createContext({})

export const StatsProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const d = {
        data, setData,
        loading, setLoading,
        error, setError
    }

    return <Stats.Provider value={d}>
        { children }
    </Stats.Provider>
}

export const useStats = () => {
    return useContext(Stats)
}