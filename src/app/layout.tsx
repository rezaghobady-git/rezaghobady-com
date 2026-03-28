import type { Metadata } from "next";
import "@/styles/globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

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
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
