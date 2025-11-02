import type { Metadata } from "next";
import { Lato, Urbanist, Signika } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

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
  title: "PT. Multi Tritama Persada - Exhibition & Interior Design",
  description: "Professional exhibition and interior design services",
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
