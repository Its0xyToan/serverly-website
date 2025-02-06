import { useStats } from "@/lib/StatsProvider"

const Stats = () => {
    const stats: any = useStats()

    return (
        <section id="stats" className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative w-full flex justify-center">
                      <span className="absolute w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-extrabold text-transparent text-center select-none blur-lg">
                        Serverly by the Numbers
                      </span>
                </div>

                <h2 className="text-4xl font-bold mb-12 text-center">Serverly by the Numbers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-5xl font-bold text-blue-400 mb-2">{!stats.loading && !stats.error ? stats.data.version : "Loading..."}</div>
                        <div className="text-xl">Version</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-cyan-400 mb-2">{!stats.loading && !stats.error ? stats.data.guildCount : "Loading..."}</div>
                        <div className="text-xl">Servers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
                        <div className="text-xl">Uptime</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats