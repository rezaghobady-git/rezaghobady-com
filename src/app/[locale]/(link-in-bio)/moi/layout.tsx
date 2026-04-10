import { ReactNode } from 'react';

export default function MoiLayout({ children }: { children: ReactNode }) {
    return (
        <div className="link-in-bio-wrapper">
            {children}
        </div>
    );
}