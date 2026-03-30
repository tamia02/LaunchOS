import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "launchOS — From idea to first customer in minutes",
  description: "One idea input → complete startup launch plan in 2 minutes. Validate, build, price, and launch — powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} dark antialiased`}>
      <body className="bg-background text-foreground font-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
