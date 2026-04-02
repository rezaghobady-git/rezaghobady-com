"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export function Button({ children, href, variant = "primary" }: any) {
    return (
        <motion.a
            href={href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={clsx(
                "px-6 py-3 rounded-xl transition backdrop-blur-md",
                variant === "primary"
                    ? "bg-black text-white shadow-lg"
                    : "border border-black/20 bg-white/60"
            )}
        >
            {children}
        </motion.a>
    );
}