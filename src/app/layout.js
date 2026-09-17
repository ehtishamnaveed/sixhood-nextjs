import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://flastech.ca"),
  title: {
    default: "FlasTech | Bespoke Digital Design & Creative Web Studio",
    template: "%s | FlasTech",
  },
  description:
    "FlasTech is a premium digital studio crafting bespoke web experiences, interactive digital platforms, and distinctive brand identities with minimalist precision and fluid motion.",
  keywords: [
    "digital design studio",
    "bespoke web design",
    "brand identity",
    "creative development",
    "GSAP motion",
    "minimalist web design",
    "Toronto design studio",
    "curated e-commerce",
  ],
  authors: [{ name: "FlasTech Inc." }],
  creator: "FlasTech Inc.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://flastech.ca",
    siteName: "FlasTech",
    title: "FlasTech | Bespoke Digital Design & Creative Web Studio",
    description:
      "Bespoke digital design, high-end web platforms, and curated brand experiences crafted with minimalist precision.",
    images: [
      {
        url: "/assets/flastech-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "FlasTech — Bespoke Digital Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlasTech | Bespoke Digital Design & Creative Web Studio",
    description:
      "Bespoke digital design, high-end web platforms, and curated brand experiences crafted with minimalist precision.",
    images: ["/assets/flastech-logo.jpeg"],
  },
  icons: {
    icon: [
      { url: "/assets/flastech-vector.svg", type: "image/svg+xml" },
      { url: "/assets/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/assets/flastech-vector.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
