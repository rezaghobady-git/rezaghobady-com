import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/navigation';
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import "@/styles/globals.css";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 1. Validate that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // 2. Fetch the messages for this specific locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main className="flex-1 pt-16">
            {children} {/* Removed LanguageSwitcher from here */}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}