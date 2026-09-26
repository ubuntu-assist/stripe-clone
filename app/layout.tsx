import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { preload } from "react-dom";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import { siteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const description =
  "Stripe is a financial services platform that helps all types of businesses accept payments, build flexible billing models, and manage money movement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  title: "Stripe | Financial Infrastructure to Grow Your Revenue",
  description,
  openGraph: {
    title: "Stripe | Financial Infrastructure to Grow Your Revenue",
    description,
    url: "/",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  preload("/fonts/Sohne.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html lang="en-US" className={cn("font-sans", inter.variable)}>
      <body>
        <div className="app-root">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
