const Help = () => {
    return (
        <section id="help" className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative w-full flex justify-center">
                      <span className="absolute w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-extrabold text-transparent text-center select-none blur-lg">
                        Get Help with Serverly
                      </span>
                </div>

                <h2 className="text-4xl font-bold mb-12 text-center">Get Help with Serverly</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <div className="p-6 rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Support Server</h3>
                        <p className="mb-4">
                            Get help, report bugs, submit suggestions, all on our Support Server. Connect with the community, or get a notification when new updates drop and if there is any outage in this moment.
                        </p>
                        <a href="/support" className="text-cyan-400 hover:underline">
                            Support Server
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help

