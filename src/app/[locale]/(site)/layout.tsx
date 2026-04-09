import { ReactNode } from 'react';
// 1. Go up: (site) -> [locale] -> app -> src
// 2. Go down: components -> layout
import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}