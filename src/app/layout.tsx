import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Yang | Personal Portfolio",
  description: "Personal portfolio and app showcase of Michael Yang",
  keywords: ["portfolio", "developer", "app showcase", "Michael Yang"],
  authors: [{ name: "Michael Yang" }],
  creator: "Michael Yang",
  publisher: "Michael Yang",
  metadataBase: new URL("https://www.michaelyanghang.com"),
  openGraph: {
    title: "Michael Yang | Personal Portfolio",
    description: "Personal portfolio and app showcase of Michael Yang",
    url: "https://www.michaelyanghang.com",
    siteName: "Michael Yang",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Yang | Personal Portfolio",
    description: "Personal portfolio and app showcase of Michael Yang",
    creator: "@michaelyang",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
