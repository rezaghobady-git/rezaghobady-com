"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative flex flex-col items-center justify-center text-center py-24 bg-gray-50 overflow-hidden">
            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold mb-6"
            >
                Book Your Strategy Call
            </motion.h1>

            {/* Subheading */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl mb-12 max-w-xl"
            >
                Schedule a 30-minute strategy session to discuss your goals and get expert advice.
            </motion.p>

            {/* Button */}
            <motion.button
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl bg-black text-white shadow-xl font-semibold text-lg md:text-xl"
            >
                Book a Call
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl overflow-hidden w-full max-w-[900px] h-[80vh] shadow-2xl relative"
                        >
                            <iframe
                                src="https://www.cal.eu/reza.ghobady/30min-strategy-call?embed_domain=localhost:3000"
                                className="w-full h-full border-0"
                            ></iframe>

                            <button
                                className="absolute top-3 right-3 text-black text-2xl font-bold"
                                onClick={() => setOpen(false)}
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}