import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description:
    "A comprehensive dashboard for managing school operations and academics using Next.js.",
  keywords: ["school", "management", "dashboard", "education", "next.js"],
  authors: [
    {
      name: "Your Name",
      url: "https://your-portfolio.com",
    },
  ],
  icons: {
    // icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scrollbar-thin" lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
