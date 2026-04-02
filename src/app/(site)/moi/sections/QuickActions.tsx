"use client";

import { motion } from "framer-motion";

const actions = [
    { label: "Book a Call", href: "https://cal.eu/reza.ghobady/30min-strategy-call" },
    { label: "Email", href: "mailto:moi@rezaghobady.com" },
    { label: "WhatsApp", href: "https://wa.me/+330768631096?text=Hi%20Reza,%20I%20found%20your%20contact%20card!" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rezaghobady/" },
    { label: "KaavOps", href: "https://kaavops.com" },
    { label: "Save Contact", href: "/rezaghobady.vcf" },
];

export function QuickActions() {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {actions.map((a, i) => (
                    <motion.a
                        key={a.label}
                        href={a.href}
                        target={a.href.startsWith('http') ? "_blank" : undefined}
                        rel={a.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        // Only add the download attribute if it's the Save Contact button
                        download={a.label === "Save Contact" ? "Reza_Ghobady.vcf" : undefined}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="p-6 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-lg shadow-sm hover:shadow-lg transition"
                    >
                        {a.label}
                    </motion.a>
                ))}
            </div>
        </section>
    );
}