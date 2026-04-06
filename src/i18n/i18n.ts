import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define your supported locales
const locales = ['en', 'fr'];

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) {
        notFound();
    }

    return {
        // Pass the locale back to the configuration
        locale: locale as string,
        // Ensure the path correctly points to your messages folder
        messages: (await import(`../messages/${locale}.json`)).default
    };
});