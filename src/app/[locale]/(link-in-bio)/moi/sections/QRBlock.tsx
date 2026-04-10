"use client";

import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";

export function QRBlock() {
    // UPDATED: Points to your specific landing page
    const url = "https://rezaghobady.com/moi";

    return (
        <section className="py-20 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto"
            >
                {/* QR Container */}
                <div className="w-64 h-64 bg-white p-6 rounded-[2.5rem] mx-auto flex items-center justify-center shadow-2xl border border-gray-100">
                    <QRCodeSVG
                        value={url}
                        size={200}
                        level={"H"} // High error correction
                        includeMargin={false}
                        imageSettings={{
                            // Optional: Add your logo in the center of the QR
                            src: "/logo.png",
                            x: undefined,
                            y: undefined,
                            height: 40,
                            width: 40,
                            excavate: true,
                        }}
                    />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">Scan to Connect</h3>
                <p className="mt-2 text-gray-600">
                    Point your camera here to save my contact info <br />
                    or visit <span className="text-blue-600 font-medium">rezaghobady.com/moi</span>
                </p>

                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-xs text-gray-400 uppercase tracking-widest font-semibold">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Digital Business Card Active
                </div>
            </motion.div>
        </section>
    );
}