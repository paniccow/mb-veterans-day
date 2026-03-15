import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manhattan Beach Veterans Day 2026 | Honoring Those Who Served",
  description: "Join us for Manhattan Beach's annual Veterans Day Celebration — featuring military displays, student performances, veteran recognition, and community engagement.",
  openGraph: {
    title: "Manhattan Beach Veterans Day 2026",
    description: "Honoring the brave men and women who served our nation. November 11, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-[#0d1117] text-white`}>
        {children}
        <Toaster richColors position="top-right" theme="dark" />
      </body>
    </html>
  );
}
