export function About() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">

                <div className="w-32 h-32 rounded-full bg-gray-200" />

                <div>
                    <h2 className="text-2xl font-semibold">
                        Reza Ghobady
                    </h2>

                    <p className="mt-4 text-gray-600">
                        I build AI-powered systems for service businesses that want
                        predictable lead generation and conversion — without relying
                        on manual processes or fragmented tools.
                    </p>
                </div>

            </div>
        </section>
    );
}