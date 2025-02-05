import Link from "next/link"

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid z-0"></div>
            <div className="absolute inset-0 bg-lights z-10"></div>
            <div className="relative z-20 text-center">
                <h1 className="mb-4">
                    <span className="block text-3xl font-light mb-2">Your new friend</span>

                    <div className="relative w-full flex justify-center">
                      <span className="absolute w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-6xl font-extrabold text-transparent text-center select-none blur-lg">
                        Serverly
                      </span>
                    </div>

                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-float">Serverly</span>
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto mx-6">
                    Make your server go to the next level with Serverly, extend other bot's modules and systems, do what hasn't been done before.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="#" className="bg-primary text-background hover:-translate-y-1/4 shadow-background shadow-lg font-bold py-2 px-6 rounded-full transition-all">
                        Invite
                    </Link>
                    <Link href="#" className="bg-secondary text-background hover:-translate-y-1/4 shadow-background shadow-lg font-bold py-2 px-6 rounded-full transition-all">
                        Support
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero