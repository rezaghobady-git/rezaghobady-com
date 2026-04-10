"use client";

export default function SocialLinks() {
    const whatsappMsg = encodeURIComponent("Hi Reza, I'm reaching out from your contact card...");

    return (
        <div className="flex justify-center gap-3 mt-6">
            <SocialIcon href="https://linkedin.com/in/rezaghobady" label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </SocialIcon>

            <SocialIcon href="https://x.com/rezamgm" label="X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464L20 4" /></svg>
            </SocialIcon>

            {/* NEW: Substack */}
            <SocialIcon href="https://rezaghobady.substack.com" label="Substack">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.539 8.242H1.46V5.406h21.079v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.079V0z" />
                </svg>
            </SocialIcon>

            {/* UPDATED: WhatsApp Message Bubble Icon */}
            <SocialIcon href={`https://wa.me/33768631096?text=${whatsappMsg}`} label="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
                </svg>
            </SocialIcon>

            <SocialIcon href="/rezaghobady.vcf" label="vCard" download={true}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
            </SocialIcon>
        </div>
    );
}

function SocialIcon({ href, children, label, download = false }: any) {
    return (
        <a
            href={href}
            download={download}
            target={download ? undefined : "_blank"}
            className="w-14 h-14 flex items-center justify-center bg-[var(--color-text-primary)] text-white rounded-md hover:bg-[var(--color-accent-warm)] transition-all shadow-md border border-[var(--color-border-strong)]"
            aria-label={label}
        >
            {children}
        </a>
    );
}