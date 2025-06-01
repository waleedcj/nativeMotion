import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { QrCode } from "@/components/QrCode";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  // display: "swap",
  // weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
  // display: "swap",
  // weight: "400",
});

const space = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Native Motion",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nativemotion.dev" 
  ),
  description:
    "Copy-Paste modern UI components and design systems for React Native. Get production-ready, lightweight, and performant animations built with Reanimated & Expo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        /> */}
      </head>
      <body
        className={`${dmSans.variable} ${jakarta.variable} ${space.variable} font-sans antialiased tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-0 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow sm:container mx-auto w-[90vw] h-auto scroll-smooth">
              {children}
            </main>
            <Footer />
            <QrCode />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
