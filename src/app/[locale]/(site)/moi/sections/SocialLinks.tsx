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

            <SocialIcon href={`https://wa.me/33768631096?text=${whatsappMsg}`} label="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
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
            /* Background: var(--color-text-primary) is your #111110 
               Border: var(--color-border-strong) is your #2A2A28
            */
            className="w-14 h-14 flex items-center justify-center bg-[var(--color-text-primary)] text-white rounded-md hover:bg-[var(--color-accent-warm)] transition-all shadow-md border border-[var(--color-border-strong)]"
            aria-label={label}
        >
            {children}
        </a>
    );
}