import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://sixhood.ca"),
  title: {
    default: "SixHood | IT Solutions & Digital Transformation",
    template: "%s | SixHood",
  },
  description:
    "SixHood is a Canada-based IT company providing cloud solutions, cybersecurity, software development, and digital transformation services.",
  keywords: [
    "IT solutions",
    "cloud computing",
    "cybersecurity",
    "software development",
    "digital transformation",
    "managed IT services",
    "Toronto IT company",
    "Canada IT consulting",
  ],
  authors: [{ name: "SixHood Inc." }],
  creator: "SixHood Inc.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://sixhood.ca",
    siteName: "SixHood",
    title: "SixHood | IT Solutions & Digital Transformation",
    description:
      "Canada's trusted IT partner for cloud, security, and digital transformation. Toronto-based, serving businesses coast to coast.",
    images: [
      {
        url: "/assets/logo1.png",
        width: 800,
        height: 600,
        alt: "SixHood IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SixHood | IT Solutions & Digital Transformation",
    description:
      "Canada's trusted IT partner for cloud, security, and digital transformation.",
    images: ["/assets/logo1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/assets/favicon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/hero-workspace.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
