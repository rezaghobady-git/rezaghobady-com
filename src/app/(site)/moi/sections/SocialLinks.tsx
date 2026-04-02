"use client";

// 1. The Main Component
export default function SocialLinks() {
    return (
        /* Changed mt-20 to mt-4 or mt-6 */
        <div className="max-w-6xl px-6 w-full mt-4">
            {/* The Divider Line */}
            <div className="border-t border-gray-100 w-full mb-8" />

            {/* The Icons Group */}
            <div className="flex flex-wrap gap-3 pb-20">
                <SocialIcon href="https://linkedin.com/in/rezaghobady" label="LinkedIn">
                    {/* LinkedIn SVG code here */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </SocialIcon>

                <SocialIcon href="https://x.com/rezamgm" label="X">
                    {/* X SVG code here */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464L20 4" /></svg>
                </SocialIcon>

                {/* Save Contact / vCard */}
                <SocialIcon href="/rezaghobady.vcf" label="Download vCard" download={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                </SocialIcon>

                {/* WhatsApp Icon */}
                <SocialIcon href={`https://wa.me/33768631096?text=${encodeURIComponent("Hi Reza, I'm reaching out from your website regarding...")}`} label="WhatsApp">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                </SocialIcon>
            </div >
        </div >
    );
}

// 2. The Helper Component (This fixes the "Cannot find name" error)
function SocialIcon({
    href,
    children,
    label, // New prop for the tooltip text
    download = false
}: {
    href: string;
    children: React.ReactNode;
    label: string;
    download?: boolean
}) {
    return (
        <div className="group relative flex flex-col items-center">
            <a
                href={href}
                download={download}
                target={download ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#2D2D2D] text-white rounded hover:bg-black transition-colors"
            >
                {children}
            </a>

            {/* Tooltip Element */}
            <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-black shadow-lg rounded-md">
                    {label}
                </span>
                {/* Tiny Triangle/Arrow */}
                <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
            </div>
        </div>
    );
}