import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Abin Thankachan | Software Engineer",
  keywords:
    "Software Engineer, Freelance Developer, Web Development, Next.js, React",
  description:
    "Abin Thankachan is a Software Engineer and Freelance Developer specializing in building beautiful, functional web applications.",
  authors: [{ name: "Abin Thankachan" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={notoSans.className}>
      <body className="font-sans antialiased bg-white dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
