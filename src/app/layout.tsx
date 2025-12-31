import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "My Family Dentists – Dental Implant Center | Best Dentist in Haridwar",
  description: "Dr. Shikha Tripathi - MDS Prosthodontist & Implantologist with 25+ years experience. Advanced dental implants, CAD/CAM lab, and laser dentistry in Haridwar. Call: 9415007106",
  keywords: "dentist Haridwar, dental clinic Haridwar, Dr. Shikha Tripathi, dental implants, My Family Dentists, CAD/CAM, laser dentistry, root canal",
  authors: [{ name: "Dr. Shikha Tripathi" }],
  creator: "My Family Dentists",
  publisher: "My Family Dentists",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://MyFamilyDentists.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "My Family Dentists – Dental Implant Center | Haridwar",
    description: "Led by Dr. Shikha Tripathi (MDS), My Family Dentists offers advanced dental care including implants, CAD/CAM, and laser treatments.",
    url: 'https://MyFamilyDentists.com/',
    siteName: "My Family Dentists",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "My Family Dentists",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "My Family Dentists – Dental Implant Center",
    description: "Advanced dental care with 25+ years experience in Haridwar. Dr. Shikha Tripathi.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
