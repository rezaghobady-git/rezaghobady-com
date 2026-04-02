"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function HeroEditorial() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "light", // Matches your white editorial theme
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });

            // IMPORTANT: This tells the script to use the .eu server
            cal("init", { origin: "https://app.cal.eu" });

        })();
    }, []);
    return (
        <section className="mt-0 w-full max-w-6xl px-6">
            {/* 1. Label - reduced mt-8 to mt-2 if necessary*/}
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-sans font-medium">
                — ABOUT
            </span>

            {/* 2. HEADLINE: Limited to max-w-3xl (approx 40% wider than xl) */}
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mt-2 mb-12 text-gray-950 max-w-3xl">
                I build things that run without me
            </h1>

            {/* 3. BODY TEXT: Limited to max-w-xl */}
            <div className="space-y-8 text-[16px] text-gray-600 leading-relaxed font-sans max-w-xl">
                <p>
                    I founded{" "}
                    <a
                        href="https://kaavops.com?utm_source=rezaghobady.com&utm_medium=referral&utm_campaign=personal_portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-black underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                        KaavOps
                    </a>{" "}
                    to design AI-powered revenue systems that help startups scale without the complexity of traditional operations.
                </p>

                <p>
                    At{" "}
                    <a
                        href="https://simine.paris?utm_source=rezaghobady.com&utm_medium=referral&utm_campaign=personal_portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-black underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                        Simine Paris
                    </a>
                    , I co-founded a contemporary art platform focused on Iranian artists. We organize exhibitions in Paris and internationally, and believe that Iranian contemporary art belongs at the center of Europe's cultural conversation — not at its margins.
                </p>
                <p>
                    I build and grow bootstrapped businesses and products that solve real problems, leveraging systems and automation to thrive as a solopreneur.”
                </p>
            </div>

            {/* THE THREE RECREATED BUTTONS */}
            {/* Reduced mt-12 to mt-10 to keep them tight to the bio text */}
            <div className="flex flex-wrap gap-4 mt-10 mb-8 max-w-xl">
                {/* KaavOps Link - Changed to rounded-md (6px) */}
                <a
                    href="https://kaavops.com?utm_source=rezaghobady.com&utm_medium=referral&utm_campaign=personal_portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#EAEAEA] text-black font-sans font-medium rounded-md text-sm hover:bg-[#DCDCDC] transition-colors inline-block"
                >
                    KaavOps
                </a>

                {/* Simine Paris Link - Changed to rounded-md */}
                <a
                    href="https://simine.fr?utm_source=rezaghobady.com&utm_medium=referral&utm_campaign=personal_portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#EAEAEA] text-black font-sans font-medium rounded-md text-sm hover:bg-[#DCDCDC] transition-colors inline-block"
                >
                    Simine Paris
                </a>

                {/* Black "Action" Button */}
                {/* Book a Call Button - Changed to rounded-md */}
                <button
                    data-cal-link="reza.ghobady/30min-strategy-call"
                    data-cal-config='{"layout":"month_view"}'
                    /* bg-black changed to bg-[#2D2D2D] to match social icons */
                    className="px-6 py-2.5 bg-[#2D2D2D] text-white font-sans font-medium rounded-md text-sm hover:bg-black transition-colors cursor-pointer"
                >
                    Book a Call
                </button>
            </div>
        </section >
    );
}