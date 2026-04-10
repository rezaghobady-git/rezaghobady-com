import { ReactNode } from 'react';
import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';

export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    );
}
