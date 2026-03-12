import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

/* JSON-LD Structured Data for SEO & GEO */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://grimme.dev/#person",
  name: "Marco Grimme",
  jobTitle: "Mobile App Developer",
  description:
    "Mobile App Developer spezialisiert auf Flutter, SwiftUI und Kotlin. 8+ veröffentlichte Apps im App Store.",
  url: "https://grimme.dev",
  sameAs: [
    "https://github.com/Marco-Syntax",
    "https://www.linkedin.com/in/marco-grimme",
  ],
  knowsAbout: [
    "Flutter",
    "Dart",
    "SwiftUI",
    "Swift",
    "Kotlin",
    "React",
    "TypeScript",
    "FastAPI",
    "Firebase",
    "Clean Architecture",
    "Cross-Platform Mobile Development",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Göttingen",
    addressCountry: "DE",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Marco Grimme — Mobile App Developer Portfolio",
  url: "https://grimme.dev",
  author: { "@id": "https://grimme.dev/#person" },
};

/* Inline script that runs synchronously before React hydration to prevent
   the flash of wrong theme (FOUC). Dark is the SSR default. */
const themeScript = `
(function(){try{
  var s=localStorage.getItem('portfolio-theme');
  var p=window.matchMedia('(prefers-color-scheme:dark)').matches;
  var t=s==='light'||s==='dark'?s:(p?'dark':'light');
  document.documentElement.setAttribute('data-theme',t);
}catch(e){document.documentElement.setAttribute('data-theme','dark');}
})();
`;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grimme.dev"),
  title: "Marco Grimme — Mobile App Developer | Flutter · SwiftUI · Kotlin",
  description:
    "Mobile App Developer aus Göttingen. Spezialisiert auf Flutter, SwiftUI und Kotlin. 8+ veröffentlichte Apps im App Store. Clean Architecture, performante Cross-Platform-Entwicklung.",
  keywords: [
    "Marco Grimme",
    "Mobile App Developer",
    "Flutter Developer",
    "SwiftUI Developer",
    "Kotlin Developer",
    "iOS Entwickler",
    "Android Entwickler",
    "App Entwicklung",
    "Cross-Platform",
    "Göttingen",
    "Mobile App Entwickler",
    "Flutter Entwickler Deutschland",
  ],
  authors: [{ name: "Marco Grimme", url: "https://grimme.dev" }],
  creator: "Marco Grimme",
  openGraph: {
    title: "Marco Grimme — Mobile App Developer",
    description:
      "Flutter · SwiftUI · Kotlin Spezialist mit 8+ veröffentlichten Apps. Clean Architecture & Cross-Platform-Entwicklung.",
    url: "https://grimme.dev",
    siteName: "Marco Grimme Portfolio",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Grimme — Mobile App Developer",
    description:
      "Flutter · SwiftUI · Kotlin Spezialist mit 8+ veröffentlichten Apps.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://grimme.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-theme="dark" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
