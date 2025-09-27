import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import Navbar from "~/components/navbar";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zacharyspringer.dev/"),
  title: {
    default: "Zachary Springer",
    template: "%s | Zachary Springer",
  },
  description: "Developer, gamer, and gym guy.",
  openGraph: {
    title: "Zachary Springer",
    description: "Developer, gamer, and gym guy.",
    url: "https://zacharyspringer.dev/",
    siteName: "Zachary Springer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Zachary Springer - Developer, gamer, and gym guy.",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Zachary Springer",
    card: "summary_large_image",
    creator: "@lordbaldwin1",
    images: ["/opengraph.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} font-mono min-h-screen antialiased`}
      >
        <div className="mx-auto max-w-4xl px-4 py-8">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
