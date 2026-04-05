import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kadu Financial Services | Top Financial Advisor in Amravati",
  description: "Secure your future with Dilip Rupraoji Kadu, Amravati's most trusted financial advisor. 30+ Years of Trust. Securing Futures. Building Generational Wealth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[var(--color-charcoal)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
