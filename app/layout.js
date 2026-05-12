import "./globals.css";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Abin Thankachan | AI & Software Engineer",
  keywords:
    "AI Engineer, Software Engineer, Renaissance Portfolio, Next.js, React",
  description:
    "Abin Thankachan is an AI & Software Engineer. A timeless digital palace where renaissance artistry meets advanced technology.",
  authors: [{ name: "Abin Thankachan" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorantGaramond.variable} ${inter.variable}`}>
      <body className="font-sans bg-[#0A0A0A] text-[#F5E6D3] antialiased selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
        {children}
      </body>
    </html>
  );
}
