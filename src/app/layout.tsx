import type { Metadata } from "next";
import "./globals.css";
import ContextProviders from "./providers";



export const metadata: Metadata = {
  metadataBase: new URL('https://inkwellmedia.agency'),
  title: 'Inkwellmedia Agency',
  description: 'Inkwellmedia Agency - Your trusted partner in media solutions.',
  keywords: [
    'Ad Making Agency', 'Media Solutions', 'Advertising', 'Marketing', 'Creative Agency',
    'Ad making agency in mumbai', 'Advertising agency in mumbai', 'Media solutions in mumbai',
    'Social media management in mumbai', 'Digital marketing in mumbai', 'Creative agency in mumbai',
    'Ad making agency in india', 'Advertising agency in india', 'Media solutions in india',
    'Social media management in india', 'Digital marketing in india', 'Creative agency in india',
    'social media management', 'digital marketing', 'creative agency', 'ad making',
    'advertising agency', 'media solutions', 'mumbai', 'india', 'Pune'
  ],
  authors: [
    { name: 'Inkwellmedia Agency' }
  ],
  openGraph: {
    title: 'Inkwellmedia Agency - Ad Making Experts',
    description: 'Inkwellmedia Agency - Your trusted partner in media solutions and ad making.',
    url: 'https://inkwellmedia.agency/',
    siteName: 'Inkwellmedia Agency',
    images:{
      url: 'https://inkwellmedia.agency/logo.jpg',
      width: 1200,
      height: 630,
      alt: 'Inkwellmedia Agency Logo',
      type: 'image/jpeg'
    },
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inkwellmedia Agency - Ad Making Experts',
    description: 'Inkwellmedia Agency - Your trusted partner in media solutions and ad making.',
    images: ['/logo.jpg']
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-lt-installed="true">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Geist+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kumar+One+Outline&family=Bebas+Neue&family=Oswald:wght@400;700&family=Oxanium:wght@400;700&family=Electrolize:wght@400;700&display=swap" rel="stylesheet" />

      </head>
      <body
        style={{
          background: "linear-gradient(to right, #000, #002147)", // Dark blue gradient
          minHeight: "100vh",
          color: "#fff",
          fontFamily: "Electrolize, sans-serif",
        }}
      >
        <ContextProviders>
          {children}
        </ContextProviders>
      </body>
    </html>
  );
}
