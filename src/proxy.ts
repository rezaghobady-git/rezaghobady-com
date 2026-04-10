import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/navigation';

export default createMiddleware(routing);

export const config = {
    // Matcher must include the locale prefixes and exclude static/api routes
    matcher: ['/', '/(en|fr)/:path*', '/((?!api|keystatic|_next|_vercel|qr|.*\\..*).*)']
};