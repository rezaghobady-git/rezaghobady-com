// src/components/layout/LanguageSwitcher.tsx
'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    return (
        <div className="flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-wider">
            <button
                onClick={() => router.replace(pathname, { locale: 'en' })}
                className={`cursor-pointer transition-colors duration-200 ${locale === 'en' ? 'text-black' : 'text-gray-400 hover:text-black'
                    }`}
            >
                EN
            </button>

            <span className="text-gray-300 font-light">|</span>

            <button
                onClick={() => router.replace(pathname, { locale: 'fr' })}
                className={`cursor-pointer transition-colors duration-200 ${locale === 'fr' ? 'text-black' : 'text-gray-400 hover:text-black'
                    }`}
            >
                FR
            </button>
        </div>
    );
}