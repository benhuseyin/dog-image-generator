import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  //metadataBase is typically set in root app/layout.js to apply to URL-based metadata fields across all routes.
  title: {
    template: "%s | Adsby",
    default: "Adsby - Optimize Every Click with AI for Google Ads", // a default is required when creating a template
  },
  description:
    "Boost your ad campaigns with Adsby’s AI. Manage Google Ads and AI advertising efficiently while optimizing search terms and keywords for better targeting.",
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
    },
  },
  openGraph: {
    title: "Dog Image Generator",
    description:
      "Generate a random dog image with this simple app. Click the button to see a new dog picture!",
    url: "https://dog-image-generator.vercel.app",
    siteName: "Dog Image Generator",
    images: [
      {
        url: "https://images.dog.ceo//breeds//leonberg//n02111129_2949.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://images.dog.ceo//breeds//leonberg//n02111129_2949.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "https://nextjs.org/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Next.js",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
