import type { Metadata } from "next";
import { Lato, Urbanist, Signika } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-urbanist",
});

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-signika",
});

export const metadata: Metadata = {
  title: "Save Decor - Interior Design Solutions",
  description: "Professional interior design services for your home and office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${urbanist.variable} ${signika.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
