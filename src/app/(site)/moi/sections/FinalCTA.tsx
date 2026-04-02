"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
    return (
        <section className="py-32 px-6 text-center">
            <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-semibold"
            >
                Ready to automate your revenue?
            </motion.h2>

            <div className="mt-10">
                <Button href="https://cal.eu/reza.ghobady/30min-strategy-call">Book a call</Button>
            </div>
        </section>
    );
}