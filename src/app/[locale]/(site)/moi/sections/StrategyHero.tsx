// "StrategyHero.tsx"
export function StrategyHero() {
    return (
        <section className="pt-28 pb-16 px-6 text-center">
            <div className="max-w-4xl mx-auto">

                {/* The Headline (matches font-serif from image_1.png but large) */}
                <h1 className="text-5xl md:text-6xl font-serif text-gray-950 tracking-tight">
                    Book Your Strategy Call
                </h1>

                {/* The New Minimalist Description */}
                <p className="mt-8 max-w-xl mx-auto text-lg text-gray-600 leading-relaxed font-sans">
                    Schedule a 30-minute strategy session to discuss your goals and get expert advice.
                </p>

                {/* The Primary, Centered CTA Button */}
                <div className="mt-12 flex justify-center">
                    <a
                        href="https://cal.eu/reza.ghobady/30min-strategy-call" // Your booking link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 bg-gray-950 text-white rounded-xl font-semibold shadow-lg hover:bg-gray-800 transition transform hover:-y-1"
                    >
                        Book a Call
                    </a>
                </div>

            </div>
        </section>
    );
}