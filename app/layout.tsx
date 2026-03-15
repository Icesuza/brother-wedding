import type { Metadata } from "next";
import "./globals.css";
import { Chenla, Cormorant_Garamond } from "next/font/google";

const serifFont = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const chenla = Chenla({
  subsets: ["khmer"],
  weight: "400", // Changed from array to string for better compatibility
  variable: "--font-chenla",
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "A beautiful full-stack wedding invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Updated lang to support both, or just "km" if Khmer is the primary language
    <html lang="km" className="scroll-smooth">
      <body
        className={`${serifFont.variable} ${chenla.variable} antialiased font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
