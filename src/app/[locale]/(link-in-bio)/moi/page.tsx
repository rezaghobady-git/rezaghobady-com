"use client";

import { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { useTranslations } from 'next-intl';
import { HeroEditorial } from "./sections/HeroEditorial";
import SocialLinks from "./sections/SocialLinks";

export default function MoiPage() {
    const t = useTranslations('Moi');

    useEffect(() => {
        (async () => {
            // getCalApi creates Cal.ns[""] (namespace = empty string).
            // The button must carry data-cal-namespace="" to match.
            const cal = await getCalApi({ embedJsUrl: "https://cal.eu/embed/embed.js" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center pt-1 md:pt-6 pb-12 px-4 md:px-6"
            style={{ backgroundColor: 'var(--color-bg)' }}>

            <HeroEditorial />

            <div className="mt-2 md:mt-4">
                <SocialLinks />
            </div>

            <main className="w-full max-w-[640px] mt-4 md:mt-8 flex flex-col gap-3 md:gap-4">

                {/* CONTAINER 1: LEAD MAGNET */}
                <a
                    href={t('leadMagnet.url')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 md:p-6 border border-[var(--color-border)] rounded-xl transition-all hover:border-[var(--color-accent-warm)] bg-[var(--color-surface)]"
                >
                    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] min-w-[40px] md:min-w-[50px] bg-[var(--color-bg)] rounded-md flex items-center justify-center border border-[var(--color-border)]">
                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                    </div>
                    <div className="flex-1 px-4 md:px-6 text-left">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">
                            {t('leadMagnet.label')}
                        </span>
                        <h2 className="text-lg md:text-[21px] font-serif text-[var(--color-text-primary)] leading-tight mt-0.5 md:mt-1">
                            {t('leadMagnet.title')}
                        </h2>
                        <p className="text-xs md:text-[13px] text-[var(--color-text-secondary)] font-sans mt-0.5 md:mt-1">
                            {t('leadMagnet.description')}
                        </p>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 min-w-[32px] rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                        <svg className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                </a>

                {/* CONTAINER 2: WORK WITH ME */}
                {/* data-cal-namespace="" must match the "" namespace getCalApi creates */}
                <button
                    data-cal-namespace=""
                    data-cal-link={t('booking.calLink')}
                    data-cal-config='{"layout":"month_view"}'
                    className="group flex items-center p-4 md:p-6 rounded-xl transition-all text-left border border-[var(--color-border)] hover:border-[var(--color-text-primary)] cursor-pointer w-full"
                    style={{ backgroundColor: '#EAEAEA' }}
                >
                    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] min-w-[40px] md:min-w-[50px] bg-black/5 rounded-md flex items-center justify-center text-[var(--color-text-primary)]">
                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <polyline points="16 11 18 13 22 9" />
                        </svg>
                    </div>
                    <div className="flex-1 px-4 md:px-6">
                        <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-[var(--color-text-muted)]">
                            {t('booking.label')}
                        </span>
                        <h2 className="text-lg md:text-[21px] font-serif leading-tight mt-0.5 md:mt-1 text-[var(--color-text-primary)]">
                            {t('booking.title')}
                        </h2>
                        <p className="text-xs md:text-[13px] font-sans mt-0.5 md:mt-1 text-[var(--color-text-secondary)]">
                            {t('booking.description')}
                        </p>
                    </div>
                    <div className="pointer-events-none w-8 h-8 md:w-10 md:h-10 min-w-[32px] rounded-full border border-[var(--color-border-strong)] flex items-center justify-center transition-all text-[var(--color-text-primary)] group-hover:bg-[var(--color-text-primary)] group-hover:text-white">
                        <svg className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </button>

                {/* CONTAINER 3: LATEST ARTICLE */}
                <a
                    href={t('article.url')}
                    className="group flex items-center p-4 md:p-6 border border-[var(--color-border)] rounded-xl transition-all hover:border-[var(--color-accent-warm)] bg-[var(--color-surface)]"
                >
                    <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] min-w-[40px] md:min-w-[50px] bg-[var(--color-bg)] rounded-md flex items-center justify-center text-[var(--color-text-primary)] border border-[var(--color-border)]">
                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                    </div>
                    <div className="flex-1 px-4 md:px-6 text-left">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">
                            {t('article.label')}
                        </span>
                        <h2 className="text-lg md:text-[21px] font-serif text-[var(--color-text-primary)] leading-tight mt-0.5 md:mt-1">
                            {t('article.title')}
                        </h2>
                        <p className="text-xs md:text-[13px] text-[var(--color-text-secondary)] font-sans mt-0.5 md:mt-1">
                            {t('article.description')}
                        </p>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 min-w-[32px] rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                        <svg className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                </a>

                {/* Footer */}
                <div className="mt-4 md:mt-8 flex flex-col items-center gap-2 pb-8 w-full max-w-[640px]">
                    <div className="flex gap-6">
                        <a href="https://kaavops.com" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] font-medium">
                            KaavOps
                        </a>
                        <a href="https://rezaghobady.com" className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] font-medium">
                            Personal Site
                        </a>
                    </div>
                    <p className="text-[8px] uppercase tracking-[0.1em] text-[var(--color-text-muted)] opacity-30">
                        © REZA GHOBADY
                    </p>
                </div>

            </main>
        </div>
    );
}
