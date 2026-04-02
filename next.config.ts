import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["@keystatic/core", "@keystatic/next", "@keystar/ui"],

  // Re-adding the redirects correctly
  async redirects() {
    return [
      {
        source: '/qrcode',
        destination: '/QRCode',
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);