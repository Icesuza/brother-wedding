import type { Metadata } from "next";
import "./globals.css";
import { Chenla, Cinzel_Decorative, Cormorant_Garamond, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const serifFont = Cormorant_Garamond({
  weight: ["600"],
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
    <html lang="km" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${serifFont.variable} ${chenla.variable} antialiased font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
