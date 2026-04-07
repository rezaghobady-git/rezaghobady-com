// src/app/layout.tsx
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // We remove <html> and <body> from here because 
  // they are already provided in app/[locale]/layout.tsx
  return children;
}