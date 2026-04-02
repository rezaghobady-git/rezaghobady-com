"use client";

// This forces Vercel to use the standard Node.js engine instead of Edge
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

// Do NOT add 'export const runtime' here. 
// Let the root layout/config handle the runtime.

export default function QRCodePage() {
    return (
        <main className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center p-6 font-sans">
            <div className="bg-[#2a2a2a] rounded-[2.5rem] p-10 shadow-2xl w-full max-w-md border border-gray-800 text-center">

                <p className="mb-4 text-xs tracking-[0.2em] uppercase font-medium" style={{ color: 'rgba(249, 248, 246, 0.6)' }}>
                    Scan to Connect
                </p>

                <div className="bg-white p-3 rounded-xl inline-block mb-6 shadow-inner">
                    <QRCodeSVG value="https://rezaghobady.com/moi" size={144} level="H" />
                </div>

                {/* Replace the <Image> component with this to test */}
                <div className="relative w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full border-4 border-[#1a1a1a]">
                    <img
                        src="/reza-profile.jpg"
                        alt="Reza Ghobady"
                        className="w-full h-full object-cover"
                    />
                </div>

                <h2 className="text-3xl font-serif mb-2" style={{ color: '#F9F8F6' }}>
                    Reza Ghobady
                </h2>

                <p className="text-gray-200 text-base mb-8 leading-relaxed font-medium">
                    Founder KaavOps <br />
                    Co-founder Simine Paris
                </p>

                <Link
                    href="/moi"
                    className="block w-full py-5 bg-[#F9F8F6] text-black text-lg font-medium rounded-lg transition-all active:scale-95 shadow-lg"
                >
                    Visit Website
                </Link>
            </div>
        </main>
    );
}