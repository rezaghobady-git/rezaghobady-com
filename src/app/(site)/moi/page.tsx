import { StrategyHero } from "./sections/StrategyHero";
import { QuickActions } from "./sections/QuickActions";
import { WhoItsFor } from "./sections/WhoItsFor";
import { Process } from "./sections/Process";
import { About } from "./sections/About";
import { QRBlock } from "./sections/QRBlock";
import { FinalCTA } from "./sections/FinalCTA";
import { HeroEditorial } from "./sections/HeroEditorial";
import SocialLinks from "./sections/SocialLinks";

export default function MoiPage() {
    return (
        <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-gray-100">
            <main className="max-w-screen-xl mx-auto px-8 pt-24 pb-20">
                <HeroEditorial />
                <SocialLinks />
            </main>
        </div>
    );
}