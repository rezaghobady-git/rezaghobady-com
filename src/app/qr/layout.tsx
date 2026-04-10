import { ReactNode } from 'react';
import '../../styles/globals.css';

export default function QrLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
