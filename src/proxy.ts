import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/navigation';

export default createMiddleware(routing);

export const config = {
    // Ensure the matcher includes the locale prefixes
    matcher: ['/', '/(en|fr)/:path*', '/((?!api|_next|_vercel|qr|.*\\..*).*)']
};