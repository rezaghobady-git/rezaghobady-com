"use client";

import { motion } from "framer-motion";

const actions = [
    // These are the same links/data as before, but mapped to the new layout
    { label: "Book a Call", href: "https://cal.eu/reza.ghobady/30min-strategy-call" },
    { label: "Email", href: "mailto:moi@rezaghobady.com" },
    { label: "WhatsApp", href: "https://wa.me/1234567890" }, // Keep your WA link
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rezaghobady/" },
    { label: "KaavOps", href: "https://kaavops.com" },
    { label: "Save Contact", href: "/rezaghobady.vcf" }, // Pointing to your public vCard
];

export function QuickActions() {
    return (
        <section className="pb-28 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {actions.map((a, i) => (
                    <motion.a
                        key={a.label}
                        href={a.href}

                        // Only add the download attribute for the contact card file
                        download={a.label === "Save Contact" ? "Reza_Ghobady.vcf" : undefined}

                        // Ensure external links open in a new tab
                        target={a.href.startsWith('http') ? "_blank" : undefined}
                        rel={a.href.startsWith('http') ? "noopener noreferrer" : undefined}

                        // Framer Motion animation configuration (sleek entry effect)
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}

                        // Hover animation for interaction feedback
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}

                        // Stylized container classes: shadow-sm/lg transition on hover.
                        className="p-8 h-32 rounded-3xl border border-gray-200 bg-white flex items-center shadow-sm hover:shadow-lg transition-all"
                    >
                        <span className="text-xl font-semibold text-gray-950 font-sans">
                            {a.label}
                        </span>
                    </motion.a>
                ))}

            </div>
        </section>
    );
}