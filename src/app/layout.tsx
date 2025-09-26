//import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import Navbar from "~/components/navbar";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.nexxel.dev"),
//   title: {
//     default: "Shoubhit Dash",
//     template: "%s | Shoubhit Dash",
//   },
//   description: "Developer, cardist and maker of things.",
//   openGraph: {
//     title: "Shoubhit Dash",
//     description: "Developer, cardist and maker of things.",
//     url: "https://www.nexxel.dev",
//     siteName: "Shoubhit Dash",
//     locale: "en_US",
//     type: "website",
//     images: ["https://www.nexxel.dev/og/home"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     "max-video-preview": -1,
//     "max-image-preview": "large",
//     "max-snippet": -1,
//   },
//   twitter: {
//     title: "Shoubhit Dash",
//     card: "summary_large_image",
//     creator: "@nexxeln",
//   },
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} min-h-screen font-mono antialiased`}
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
