import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Reza Ghobady — Entrepreneur, Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F9F8F6",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top — name */}
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9A9A94",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 500,
          }}
        >
          rezaghobady.com
        </div>

        {/* Middle — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              color: "#111110",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Reza Ghobady
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#4A4A45",
              fontStyle: "italic",
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            Entrepreneur building at the intersection of AI, automation, and contemporary art.
          </div>
        </div>

        {/* Bottom — ventures */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#C8A882",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            KaavOps · Simine Paris · Paris
          </div>
          <div
            style={{
              width: 1,
              height: 16,
              backgroundColor: "#E5E4E0",
            }}
          />
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#9A9A94",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            AI · Automation · Contemporary Art
          </div>
        </div>
      </div>
    ),
    size
  );
}
