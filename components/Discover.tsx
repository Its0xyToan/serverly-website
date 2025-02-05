const Discover = () => {
    return (
        <section id="discover" className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative w-full flex justify-center">
                      <span className="absolute w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-extrabold text-transparent text-center select-none blur-lg">
                        Discover Serverly's Features
                      </span>
                </div>

                <h2 className="text-4xl font-bold mb-12 text-center">Discover Serverly's Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Moderation</h3>
                        <p>
                            Keep your server safe with advanced moderation tools, including auto-moderation, custom filters, and
                            detailed logs.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Fun Commands</h3>
                        <p>
                            Engage your community with a variety of fun commands, games, and interactive features that keep the
                            conversation lively.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Productivity</h3>
                        <p>
                            Boost your server's productivity with polls, reminders, and custom command creation to streamline your
                            workflows.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover

