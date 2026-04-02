"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function CalButtonInline() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-black text-white shadow-lg font-semibold"
            >
                Book a Strategy Call
            </motion.button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-xl overflow-hidden w-full max-w-md h-[600px]">
                        <iframe
                            src="https://www.cal.eu/reza.ghobady/30min-strategy-call?embed_domain=localhost:3000"
                            className="w-full h-full border-0"
                        ></iframe>
                    </div>
                    <button
                        className="absolute top-4 right-4 text-black text-xl font-bold"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
}