import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderOrganism from "@/components/organisms/header.organism";
import FooterOrganism from "@/components/organisms/footer.organism";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind Theme Switcher",
  description:
    "A simple Tailwind CSS theme switcher template for Next.js projects, enabling quick and easy implementation of theme mode switching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-light-background dark:bg-dark-background night-owl:bg-night-owl-background`}
      >
        <HeaderOrganism />
        <main className="relative portrait:h-[87.5vh] h-[85vh]">
          {children}
        </main>
        <FooterOrganism />
      </body>
    </html>
  );
}
