const GlowBar = () => {
    return (
        <div className="relative w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent">
            <div className="absolute top-0 left-0 w-full h-full blur-3xl">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse"></div>
            </div>
        </div>
    );
};

export default GlowBar;