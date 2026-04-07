import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // 1. Core Keystatic / MDX Settings
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["@keystatic/core", "@keystatic/next", "@keystar/ui"],

  // 2. Satisfy the strict TypeScript 'position-only' rule
  devIndicators: {
    position: 'bottom-right',
  },

  // 3. Top-level Network Bypass
  // We use @ts-ignore because your @types/next version hasn't updated its definitions 
  // for this new top-level key yet, but the Next.js engine NEEDS it here.
  // @ts-ignore
  allowedDevOrigins: ['192.168.1.168:3000', 'localhost:3000'],

  // 4. Leave experimental empty to avoid "Unrecognized key" terminal warnings
  experimental: {},

  async redirects() {
    return [
      // ... your existing redirects here ...
    ];
  },
};

export default withNextIntl(nextConfig);