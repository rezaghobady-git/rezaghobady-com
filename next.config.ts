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
        source: '/QRCode',
        destination: '/qr',
        permanent: true,
      },
      {
        source: '/qrcode',
        destination: '/qr',
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);