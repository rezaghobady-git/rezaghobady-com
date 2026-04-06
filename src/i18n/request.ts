// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './navigation';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        // Use ../../messages if the folder is in the project root
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});