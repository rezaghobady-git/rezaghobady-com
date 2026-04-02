"use client";

import Image from 'next/image';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

export default function QRCodePage() {
    return (
        <main className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center p-6 font-sans">

            {/* Main Card Container */}
            <div className="bg-[#2a2a2a] rounded-[2.5rem] p-10 shadow-2xl w-full max-w-md border border-gray-800 text-center">

                {/* "Scan to Connect" with a lighter, more elegant color */}
                <p
                    className="mb-4 text-xs tracking-[0.2em] uppercase font-medium"
                    style={{ color: 'rgba(249, 248, 246, 0.6)' }} // Using your brand color at 60% opacity
                >
                    Scan to Connect
                </p>

                <div className="bg-white p-4 rounded-lg inline-block mb-6 shadow-inner">
                    <QRCodeSVG
                        value="https://rezaghobady.com/moi"
                        size={144}
                        level="H"
                        includeMargin={false}
                    />
                </div>

                {/* Profile Image Section */}
                <div className="relative w-36 h-36 mx-auto mb-6 overflow-hidden rounded-full border-2 border-[#F9F8F6]">
                    <Image
                        src="/reza-profile.jpg"
                        alt="Reza Ghobady"
                        fill
                        sizes="144px"
                        priority
                        className="object-cover"
                    />
                </div>

                <h2 className="text-3xl font-serif mb-2" style={{ color: '#F9F8F6' }}>
                    Reza Ghobady
                </h2>

                <p
                    className="text-gray-200 text-base mb-8 leading-relaxed"
                    style={{ color: 'rgba(249, 248, 246, 0.6)' }}
                >
                    Founder KaavOps <br />
                    Co-founder Simine Paris
                </p>

                {/* Action Button */}
                <Link
                    href="/"
                    className="block w-full py-3 bg-[#F9F8F6] text-black text-lg font-medium rounded-lg transition-all active:scale-95 shadow-lg"
                >
                    Visit Website
                </Link>
            </div>
        </main>
    );
}