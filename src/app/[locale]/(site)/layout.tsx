import { ReactNode } from 'react';

export default function SiteLayout({ children }: { children: ReactNode }) {
  // Remove <Nav /> and <Footer /> from here!
  // They are already being provided by the parent layout.
  return (
    <>
      {children}
    </>
  );
}