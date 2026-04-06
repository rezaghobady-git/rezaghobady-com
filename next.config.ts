import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from 'next-intl/plugin';

// Standard initialization (it will automatically find src/i18n/request.ts)
const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["@keystatic/core", "@keystatic/next", "@keystar/ui"],
  // ... keep your redirects here ...
};

export default withNextIntl(withMDX(nextConfig));