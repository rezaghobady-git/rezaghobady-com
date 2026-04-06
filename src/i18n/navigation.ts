import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

// 1. Define your routing settings
export const routing = defineRouting({
    locales: ['en', 'fr'],
    defaultLocale: 'en'
});

// 2. Export the "aware" utilities
export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);