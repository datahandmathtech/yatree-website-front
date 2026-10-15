import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/lib/lenis";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/AuthContext";
import CustomCursor from "@/components/ui/CustomCursor";
import InteractiveBackground from "@/components/ui/InteractiveBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

import { constructMetadata, getLocalBusinessSchema } from "@/lib/seo";
import ChatWidget from "@/components/layout/ChatWidget";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MWK7NXS8');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jakarta.variable} antialiased overflow-x-hidden relative`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWK7NXS8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <CustomCursor />
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <SmoothScroll>
              <div className="relative w-full overflow-hidden flex flex-col min-h-screen">
                {children}
                <ChatWidget />
              </div>
            </SmoothScroll>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
