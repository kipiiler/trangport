// app/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | trang",
  description: "A personal portfolio site built with Sanity and Next.js",
  metadataBase: new URL("https://kipiiler.com"),
  openGraph: {
    title: "Portfolio | trang",
    description: "A personal portfolio site built with Sanity and Next.js",
    url: "https://kipiiler.com",
    images: "https://static.thenounproject.com/png/707608-200.png",
    siteName: "kipiiler.com",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <Analytics />
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-zinc-900 text-white`}
      >
        <Navbar />
        {/* <HydrationOverlay>{children}</HydrationOverlay> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
