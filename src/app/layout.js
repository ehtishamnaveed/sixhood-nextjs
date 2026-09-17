import { Archivo, JetBrains_Mono } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const description =
  'FlasTech is a Toronto software house. We design, engineer and ship web platforms, mobile apps and e-commerce for companies in Canada, the UAE and Pakistan.';

export const metadata = {
  metadataBase: new URL('https://flastech.ca'),
  title: {
    default: 'FlasTech — Software house, Toronto',
    template: '%s — FlasTech',
  },
  description,
  keywords: [
    'software house',
    'software development company Toronto',
    'web platform development',
    'mobile app development',
    'e-commerce development',
    'product design',
    'custom software',
  ],
  authors: [{ name: 'FlasTech Inc.' }],
  creator: 'FlasTech Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://flastech.ca',
    siteName: 'FlasTech',
    title: 'FlasTech — Built fast. Built to last.',
    description,
    images: [{ url: '/assets/flastech-logo.jpeg', width: 1254, height: 1254, alt: 'FlasTech logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlasTech — Built fast. Built to last.',
    description,
    images: ['/assets/flastech-logo.jpeg'],
  },
  icons: {
    icon: [
      { url: '/assets/flastech-vector.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export const viewport = {
  themeColor: '#0b0b0e',
};

// Runs before first paint: flags JS for entrance states and skips the intro after the first visit.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('ft-intro'))d.classList.add('intro-seen')}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
