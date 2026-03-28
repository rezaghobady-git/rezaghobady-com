import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-12 md:py-16"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-sans font-medium text-sm tracking-wide footer-link-primary"
            >
              Reza Ghobady
            </Link>
            <p className="mt-2 text-sm footer-muted">
              Paris — Entrepreneur, builder, gallery founder.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm footer-link-muted"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom line */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="label footer-muted">© {year} Reza Ghobady</p>
          <div className="flex gap-5">
            <a
              href="https://linkedin.com/in/rezaghobady"
              target="_blank"
              rel="noopener noreferrer"
              className="label footer-link-muted"
            >
              LinkedIn
            </a>
            <a
              href="https://kaavops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="label footer-link-muted"
            >
              KaavOps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
