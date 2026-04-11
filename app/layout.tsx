import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://api.kiracloud.me"),
  title: "Kiracloud API - Powerful REST API Platform",
  description: "A seamless, high-performance REST API built for developers. Zero authentication required — just send a request and power up your applications instantly.",
  keywords: ["API", "download", "spotify", "youtube", "tiktok", "instagram", "lyrics", "REST API"],
  verification: {
    google: "your-google-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [
    {
      name: "Kiracloud",
    },
  ],
  openGraph: {
    title: "Kiracloud API - Powerful REST API Platform",
    description: "A seamless, high-performance REST API built for developers. Zero authentication required — just send a request and power up your applications instantly.",
    url: "https://api.kiracloud.me",
    siteName: "Kiracloud API",
    images: [
      {
        url: "https://api.kiracloud.me/og.svg",
        width: 1280,
        height: 640,
        alt: "Kiracloud API - Powerful REST API Platform",
        type: "image/svg+xml",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiracloud API - Powerful REST API Platform",
    description: "A seamless, high-performance REST API built for developers. Zero authentication required — just send a request and power up your applications instantly.",
    images: ["https://api.kiracloud.me/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kiracloud API",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00bc96",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github-dark.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('kiracloud-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', t);
                  if (t === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={spaceMono.variable} style={{ fontFamily: "var(--font-mono)", background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
