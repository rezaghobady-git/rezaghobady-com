"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function Process() {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto">
            <FadeIn>
                <h2 className="text-3xl font-semibold">
                    What happens next
                </h2>
            </FadeIn>

            <div className="mt-12 space-y-10">
                {["Audit", "Strategy", "Implementation"].map((step, i) => (
                    <FadeIn key={step} delay={i * 0.1}>
                        <div className="flex items-start gap-6">
                            <div className="text-sm text-gray-400">
                                0{i + 1}
                            </div>
                            <div>
                                <h3 className="font-medium">{step}</h3>
                                <p className="text-gray-600 mt-2">
                                    High-level explanation of this step.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}