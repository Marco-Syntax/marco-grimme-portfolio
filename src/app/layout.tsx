import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

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
  title: "Marco Grimme — Mobile App Developer",
  description:
    "Mobile App Developer specializing in Flutter, SwiftUI and Kotlin. Building structured, performant and maintainable apps with clean architecture.",
  keywords: ["Flutter", "SwiftUI", "Kotlin", "Mobile Developer", "Marco Grimme", "App Development"],
  authors: [{ name: "Marco Grimme" }],
  openGraph: {
    title: "Marco Grimme — Mobile App Developer",
    description: "Flutter · SwiftUI · Kotlin · Python · FastAPI",
    type: "website",
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
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
