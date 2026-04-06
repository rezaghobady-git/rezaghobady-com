"use client";

import { useEffect } from "react";
import { HeroEditorial } from "./sections/HeroEditorial";
import SocialLinks from "./sections/SocialLinks";

export default function MoiPage() {
    // 1. THE CSS HACK: Hides Nav and Footer on this specific page
    useEffect(() => {
        // 1. Target standard semantic tags
        const nav = document.querySelector('nav');
        const footer = document.querySelector('footer');
        const header = document.querySelector('header'); // Most logos/site names live here

        // 2. Target common class patterns if semantic tags aren't used
        const logoHeader = document.querySelector('[class*="Navbar"]');
        const siteBranding = document.querySelector('[class*="Logo"]');

        const elementsToHide = [nav, footer, header, logoHeader, siteBranding];

        elementsToHide.forEach(el => {
            if (el instanceof HTMLElement) el.style.display = 'none';
        });

        return () => {
            elementsToHide.forEach(el => {
                if (el instanceof HTMLElement) el.style.display = '';
            });
        };
    }, []);

    return (
        /* Reduced pt-4 to pt-2 for mobile. 
           This moves the image significantly closer to the top of the screen.
        */
        <div className="min-h-screen flex flex-col items-center pt-2 md:pt-12 pb-20 px-4 md:px-6" style={{ backgroundColor: 'var(--color-bg)' }}>

            <style dangerouslySetInnerHTML={{
                __html: `
                nav, footer, header, [class*="nav"], [class*="footer"], [class*="Header"] { 
                    display: none !important; 
                }
            `}} />

            <HeroEditorial />
            <SocialLinks />

            <main className="w-full max-w-[640px] mt-8 md:mt-12 flex flex-col gap-4">

                {/* CONTAINER 1: LEAD MAGNET */}
                <a href="#" className="group flex items-center p-4 md:p-6 border border-[var(--color-border)] rounded-xl transition-all hover:border-[var(--color-accent-warm)] bg-[var(--color-surface)]">
                    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] min-w-[40px] md:min-w-[50px] bg-[var(--color-bg)] rounded-md flex items-center justify-center border border-[var(--color-border)]">
                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                    </div>
                    <div className="flex-1 px-4 md:px-6 text-left">
                        <span className="text-[9px] md:text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">Free Resource</span>
                        <h2 className="text-lg md:text-[21px] font-serif text-[var(--color-text-primary)] leading-tight mt-0.5 md:mt-1">Scale Like a Venture</h2>
                        <p className="text-xs md:text-[13px] text-[var(--color-text-secondary)] font-sans mt-0.5 md:mt-1">How AI transforms small business growth.</p>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 min-w-[32px] rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                        <svg className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                </a>

                {/* CONTAINER 2: WORK WITH ME (Fixing invisible text/icon) */}
                <button
                    data-cal-link="reza.ghobady/30min-strategy-call"
                    className="group flex items-center p-4 md:p-6 rounded-xl transition-all text-left border border-[var(--color-border)] hover:border-[var(--color-text-primary)] cursor-pointer"
                    style={{ backgroundColor: '#EAEAEA' }}
                >
                    {/* Left: Icon - Forced to #111110 */}
                    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] min-w-[40px] md:min-w-[50px] bg-black/5 rounded-md flex items-center justify-center"
                        style={{ color: 'var(--color-text-primary)' }}>
                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <polyline points="16 11 18 13 22 9" />
                        </svg>
                    </div>

                    {/* Middle: Content - Forced to #111110 and #4A4A45 */}
                    <div className="flex-1 px-4 md:px-6">
                        <span className="text-[9px] md:text-[9px] uppercase tracking-[0.2em] font-medium"
                            style={{ color: 'var(--color-text-muted)' }}>
                            Get Started
                        </span>
                        <h2 className="text-lg md:text-[21px] font-serif leading-tight mt-0.5 md:mt-1"
                            style={{ color: 'var(--color-text-primary)' }}>
                            Build Your System
                        </h2>
                        <p className="text-xs md:text-[13px] font-sans mt-0.5 md:mt-1"
                            style={{ color: 'var(--color-text-secondary)' }}>
                            Schedule your free strategy call.
                        </p>
                    </div>

                    {/* Right: Arrow - Bordered by #2A2A28, Fills with #111110 on hover */}
                    <div className="w-8 h-8 md:w-10 md:h-10 min-w-[32px] rounded-full border border-[var(--color-border-strong)] flex items-center justify-center transition-all group-hover:bg-[var(--color-text-primary)] group-hover:text-white"
                        style={{ color: 'var(--color-text-primary)' }}>
                        <svg className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </button>

                {/* CONTAINER 3: LATEST ARTICLE */}
                <a href="#" className="group flex items-center p-4 md:p-6 border border-[var(--color-border)] rounded-xl transition-all hover:border-[var(--color-accent-warm)] bg-[var(--color-surface)]">
                    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] min-w-[40px] md:min-w-[50px] bg-[var(--color-bg)] rounded-md flex items-center justify-center text-[var(--color-text-primary)] border border-[var(--color-border)]">
                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                    </div>
                    <div className="flex-1 px-4 md:px-6 text-left">
                        <span className="text-[9px] md:text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">Latest Writing</span>
                        <h2 className="text-lg md:text-[21px] font-serif text-[var(--color-text-primary)] leading-tight mt-0.5 md:mt-1">AI Without the Hype</h2>
                        <p className="text-xs md:text-[13px] text-[var(--color-text-secondary)] font-sans mt-0.5 md:mt-1">Practical AI planning for real businesses.</p>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 min-w-[32px] rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                        <svg className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                </a>

            </main>
        </div>
    );
}