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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4 text-primary">Moderation</h3>
                        <p>
                            Easily manage your guild's moderation cases with Serverly's complex case, logs, and warning modules for a maximum control over your server.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Control new members</h3>
                        <p>
                            Easily control new members with OnBoarding Timeout, AutoRole, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover

