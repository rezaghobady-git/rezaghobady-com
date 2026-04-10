"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] h-16 transition-all duration-200 ${
        scrolled ? "nav-scrolled" : "nav-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          Reza Ghobady
        </Link>

        {/* Desktop nav */}
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
            {mounted && <LanguageSwitcher />}
          </div>
        </nav>

        {/* Mobile: hamburger only — language switcher lives inside the dropdown */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-3 touch-manipulation"
            style={{ color: "var(--color-text-primary)" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown — full screen for easy tapping */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-[99] flex flex-col p-8 md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-5 mb-12">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="w-full text-center bg-black text-white py-4 rounded-xl font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
