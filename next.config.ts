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

  // 3. Allow LAN access for mobile device testing
  allowedDevOrigins: ['192.168.1.168'],

  // 4. Tell Vercel's file tracer to bundle the content directory into serverless
  //    functions (Keystatic reader uses fs at runtime, not static imports)
  outputFileTracingIncludes: {
    '/**': ['./src/content/blog/**'],
  },

  // 5. Leave experimental empty to avoid "Unrecognized key" terminal warnings
  experimental: {},

  async redirects() {
    return [
      // ... your existing redirects here ...
    ];
  },
};

export default withNextIntl(nextConfig);