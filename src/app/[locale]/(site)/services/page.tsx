import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Script from "next/script";

// ─── METADATA (Server Side) ───
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage.Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const CAL_LINK = "reza.ghobady/30min-strategy-call?utm_source=rezaghobady.com&utm_medium=website&utm_campaign=book-audit";
const CAL_NAMESPACE = "30min-strategy-call";

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  // Logic to parse the comma-separated lists from your JSON
  const systemKeys = t("Systems.list").split(",");
  const processSteps = t("Process.steps").split(",");

  return (
    <>
      <Script
        id="cal-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(C,A,L){let p=function(a,ar){a.q.push(ar);};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true;}if(ar[0]===L){const api=function(){p(api,arguments);};const namespace=ar[1];api.q=api.q||[];typeof namespace==="string"?(cal.ns[namespace]=api)&&p(api,ar):p(cal,ar);return;}p(cal,ar);};})(window,"https://app.cal.eu/embed/embed.js","init");Cal("init","${CAL_NAMESPACE}",{origin:"https://cal.eu"});Cal.ns["${CAL_NAMESPACE}"]("ui",{"hideEventTypeDetails":false,"layout":"month_view"});`,
        }}
      />

      {/* ── Header ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            {t("Header.label")}
          </p>
          <h1
            className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {t("Header.title")}
          </h1>
          <p
            className="mt-6 text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "52ch" }}
          >
            {t("Header.description")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              data-cal-namespace={CAL_NAMESPACE}
              data-cal-link={CAL_LINK}
              data-cal-config='{"layout":"month_view"}'
              className="btn-primary"
            >
              {t("Header.ctaAudit")}
            </button>
            <a
              href="https://kaavops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              kaavops.com ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── What we build ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="label" style={{ color: "var(--color-text-muted)" }}>
              {t("Systems.label")}
            </p>
            <h2
              className="mt-3 text-3xl md:text-4xl"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-text-primary)",
              }}
            >
              {t("Systems.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemKeys.map((key) => (
              <div
                key={key}
                className="p-8 border"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <p
                  className="label"
                  style={{ color: "var(--color-accent-warm)" }}
                >
                  {t(`Systems.${key.trim()}.tag`)}
                </p>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    maxWidth: "none",
                  }}
                >
                  {t(`Systems.${key.trim()}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            {t("Process.label")}
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {t("Process.title")}
          </h2>

          <div className="mt-12 flex flex-col">
            {processSteps.map((step, i) => (
              <div
                key={step}
                className="py-8 border-t flex gap-8"
                style={{
                  borderColor:
                    i === 0
                      ? "var(--color-border-strong)"
                      : "var(--color-border)",
                }}
              >
                <span
                  className="label shrink-0 pt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {step.trim()}
                </span>
                <div>
                  <p
                    className="text-base font-medium"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {t(`Process.${step.trim()}.label`)}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{
                      color: "var(--color-text-secondary)",
                      maxWidth: "none",
                    }}
                  >
                    {t(`Process.${step.trim()}.body`)}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            {t("Fit.label")}
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {t("Fit.title")}
          </h2>

          <div
            className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>{t("Fit.body1")}</p>
            <p>{t("Fit.body2")}</p>
            <p>{t("Fit.body3")}</p>
          </div>

          <div
            className="mt-12 pt-10 border-t flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ borderColor: "var(--color-border)" }}
          >
            <button
              data-cal-namespace={CAL_NAMESPACE}
              data-cal-link={CAL_LINK}
              data-cal-config='{"layout":"month_view"}'
              className="btn-primary"
            >
              {t("Header.ctaAudit")}
            </button>
            <Link href="/about" className="btn-ghost text-sm">
              {t("Fit.ctaAbout")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}