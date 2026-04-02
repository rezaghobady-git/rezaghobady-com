import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

// 1. Viewport is handled separately in newer Next.js versions
export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "Reza Ghobady",
    template: "%s — Reza Ghobady",
  },
  description:
    "Entrepreneur building at the intersection of AI, automation, and contemporary art. Founder of KaavOps and Simine Paris. Based in Paris.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rezaghobady.com"
  ),
  // 2. These flags tell mobile browsers to treat the site like an app
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Reza Ghobady",
  },
  openGraph: {
    siteName: "Reza Ghobady",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        {children}
      </body>
    </html>
  );
}
