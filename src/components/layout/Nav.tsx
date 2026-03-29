"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 ${
        scrolled ? "nav-scrolled" : "nav-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          Reza Ghobady
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link text-sm">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-secondary text-xs py-2 px-4">
            Get in touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text-primary)",
              transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text-primary)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text-primary)",
              transform: menuOpen
                ? "rotate(-45deg) translate(2px, -2px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden nav-mobile-menu px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-secondary text-xs py-2 px-4 self-start"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
