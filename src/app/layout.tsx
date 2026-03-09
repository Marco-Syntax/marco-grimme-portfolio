import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="de" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#0f0e0c] text-[#f0ede6]">
        {children}
      </body>
    </html>
  );
}
