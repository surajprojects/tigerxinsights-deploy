import Link from "next/link";
import { MobileHeader } from "./mobileheader";

export function Header() {
    return (
        <>
            <header>
                <nav className="w-full py-6 sm:py-8 px-8 sm:px-16 lg:px-28 font-semibold flex justify-between">
                    <div className="text-xl sm:text-2xl whitespace-nowrap shrink mr-2 sm:mr-0">
                        <Link href="/">Tiger Insights</Link>
                    </div>
                    <div className="relative block md:hidden">
                        <MobileHeader />
                    </div>
                    <ul className="w-72 py-1 px-2 hidden md:flex justify-between">
                        <li>
                            <Link href="/work">Works</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/toolkit">Toolkit</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};