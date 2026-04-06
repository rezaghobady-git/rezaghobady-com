"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher"; // Adjust path if it's in the same folder

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 ${scrolled ? "nav-scrolled" : "nav-transparent"
        }`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          Reza Ghobady
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link text-sm">
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 border-l border-gray-200 pl-4 ml-2">
            <Link href="/contact" className="btn-secondary text-xs py-2 px-4">
              Get in touch
            </Link>

            {/* The Switcher fits perfectly here */}
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile hamburger ... rest of your code */}
      </div>
    </header>
  );
}