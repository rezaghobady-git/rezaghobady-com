import { Hero } from "./sections/Hero";
import { QuickActions } from "./sections/QuickActions";
import { WhoItsFor } from "./sections/WhoItsFor";
import { Process } from "./sections/Process";
import { About } from "./sections/About";
import { QRBlock } from "./sections/QRBlock";
import { FinalCTA } from "./sections/FinalCTA";

export default function ContactPage() {
    return (
        <main className="bg-gradient-to-b from-white via-gray-50 to-white text-black">
            <Hero />
            <QuickActions />
            <WhoItsFor />
            <Process />
            <About />
            <QRBlock />
            <FinalCTA />
        </main>
    );
}