"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function HeroEditorial() {
    return (
        <section className="w-full flex flex-col items-center text-center mt-0 pt-0">
            {/* Profile Image */}
            <div className="w-20 h-20 md:w-24 md:h-24 mb-2 md:mb-3 rounded-full overflow-hidden flex items-center justify-center relative border border-[var(--color-border-strong)] shadow-sm">
                <img src="/reza-profile.jpg" alt="Reza" className="w-full h-full object-cover" />
            </div>

            {/* NAME: Still using DM Sans via inline to keep it separate */}
            <h1 className="text-xl md:text-3xl mb-1 tracking-tight"
                style={{
                    color: 'var(--color-text-primary)',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500
                }}>
                Reza Ghobady
            </h1>

            {/* BIO: Now using the 'hero-bio' class defined in your CSS */}
            <p className="hero-bio max-w-[240px] md:max-w-md opacity-90 mx-auto"
                style={{ color: 'var(--color-text-secondary)' }}>
                I build AI-powered revenue systems for agencies and B2B businesses.
            </p>
        </section>
    );
}