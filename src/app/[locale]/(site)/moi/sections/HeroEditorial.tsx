"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function HeroEditorial() {
    return (
        /* Ensure mt-0 is set. 
           We also reduced the mb-4 to mb-3 to tighten the gap to your name.
        */
        <section className="w-full flex flex-col items-center text-center mt-0 pt-0">
            {/* Profile Image Circle */}
            <div className="w-20 h-20 mb-3 md:mb-4 rounded-full overflow-hidden flex items-center justify-center relative border border-[var(--color-border-strong)] shadow-sm bg-[var(--color-surface-muted)]">
                <img
                    src="/reza-profile.jpg"
                    alt="Reza Ghobady"
                    className="w-full h-full object-cover"
                />
            </div>

            <h1 className="text-3xl md:text-5xl font-serif mb-1 md:mb-4 tracking-tight"
                style={{ color: 'var(--color-text-primary)' }}>
                Reza Ghobady
            </h1>

            <p className="text-sm md:text-lg max-w-[280px] md:max-w-sm leading-relaxed font-sans"
                style={{ color: 'var(--color-text-secondary)' }}>
                I build AI-powered revenue systems for agencies and B2B businesses.
            </p>
        </section>
    );
}