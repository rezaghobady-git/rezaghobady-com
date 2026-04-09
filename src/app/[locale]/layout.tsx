import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import '../../styles/globals.css';

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            {/* suppressHydrationWarning here is the industry standard for i18n apps */}
            <body className="antialiased" suppressHydrationWarning>
                <NextIntlClientProvider
                    messages={messages}
                    locale={locale}
                >
                    <Nav />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}