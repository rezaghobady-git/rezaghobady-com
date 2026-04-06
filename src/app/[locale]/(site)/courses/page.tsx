import type { Metadata } from "next";
import Link from "next/link";
import NotifyForm from "./NotifyForm";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Courses on AI automation, n8n workflows, and building revenue systems for small businesses — coming soon from Reza Ghobady.",
};

const upcomingCourses = [
  {
    tag: "AI · Automation",
    title: "Revenue Systems with n8n",
    description:
      "Build the automation infrastructure that handles lead capture, qualification, follow-up, and onboarding — end to end, without code.",
    outcomes: [
      "Design a full lead-to-client automation pipeline",
      "Connect your CRM, email, and calendar into one system",
      "Build workflows that run 24/7 without human intervention",
      "Debug and maintain n8n automations independently",
    ],
    audience: "Agency owners and B2B service providers who have found product-market fit and need infrastructure to match.",
    status: "In development",
  },
  {
    tag: "Tools · Business",
    title: "AI Tools for Solo Operators",
    description:
      "A practical course on running one or two businesses as a solo founder — using AI tools to do the work of a team without hiring one.",
    outcomes: [
      "Build a personal operations stack with AI at its core",
      "Automate client communication and follow-up",
      "Use Claude, n8n, and ClickUp as an integrated system",
      "Reclaim time from administrative work",
    ],
    audience: "Solo founders and consultants who want to scale output without scaling headcount.",
    status: "Planned",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Courses
          </p>
          <h1
            className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Courses coming soon.
          </h1>
          <p
            className="mt-6 text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "52ch" }}
          >
            I&apos;m building courses on AI automation, n8n workflows, and
            building no-code/low-code systems for small businesses. If you
            want to be notified when the first one launches, drop your email
            below.
          </p>

          {/* Notify form */}
          <div className="mt-10">
            <NotifyForm />
            <p
              className="mt-3 text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              No spam. One email when the course launches. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's coming ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="label" style={{ color: "var(--color-text-muted)" }}>
              — In the pipeline
            </p>
            <h2
              className="mt-3 text-3xl md:text-4xl"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-text-primary)",
              }}
            >
              What I&apos;m building
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingCourses.map((course) => (
              <div
                key={course.title}
                className="p-8 border flex flex-col"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                {/* Status badge + tag */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p
                    className="label"
                    style={{ color: "var(--color-accent-warm)" }}
                  >
                    {course.tag}
                  </p>
                  <span
                    className="label px-2 py-0.5"
                    style={{
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {course.status}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mt-4 text-2xl font-normal leading-snug"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {course.title}
                </h3>

                {/* Description */}
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)", maxWidth: "none" }}
                >
                  {course.description}
                </p>

                {/* Outcomes */}
                <div className="mt-6">
                  <p
                    className="label mb-3"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    What you&apos;ll build
                  </p>
                  <ul className="flex flex-col gap-2">
                    {course.outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <span
                          className="shrink-0 mt-0.5"
                          style={{ color: "var(--color-accent-warm)" }}
                          aria-hidden="true"
                        >
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Audience */}
                <div
                  className="mt-6 pt-6 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <p
                    className="label mb-2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Who it&apos;s for
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)", maxWidth: "none" }}
                  >
                    {course.audience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why these courses ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Why
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Practical, not theoretical
          </h2>
          <div
            className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>
              Everything I teach comes directly from building KaavOps — an
              agency that designs and deploys automation systems for real
              businesses with real revenue goals. These are not exercises.
              They are the exact systems I build for clients, taught as
              transferable frameworks.
            </p>
            <p>
              Most automation courses focus on tools. These courses focus on
              systems — the difference between knowing how to use n8n and
              knowing how to design infrastructure that works at 2am without
              anyone watching it.
            </p>
            <p>
              Pricing will be honest and straightforward. No upsells, no
              communities behind paywalls, no fluff to justify a higher price.
              The value is in the content.
            </p>
          </div>

          {/* CTA */}
          <div
            className="mt-12 pt-10 border-t flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link href="/blog" className="btn-ghost text-sm">
              Read my writing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
