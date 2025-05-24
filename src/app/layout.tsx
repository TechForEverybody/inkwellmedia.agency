import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContextProviders from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
    images: [
      '/logo.jpg'
    ],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: "linear-gradient(to right, #4F1C51, #000000)",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <ContextProviders>
          {children}
        </ContextProviders>
      </body>
    </html>
  );
}
