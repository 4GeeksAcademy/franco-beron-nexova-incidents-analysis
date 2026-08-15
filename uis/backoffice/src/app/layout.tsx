import type { Metadata } from "next";

import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "nexova Backoffice",

  description: "Panel interno " + "de nexova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <nav className="navbar">
          <div className="navContent">
            <Link href="/" className="logo">
              nexova
            </Link>

            <div className="navLinks">
              <Link href="/">Inicio</Link>

              <Link href="/incidents">Incidencias</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
