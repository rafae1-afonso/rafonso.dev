import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import BorderComponent from "@/components/atoms/BorderComponent";
import BorderProvider from "@/providers/border-provider";
import LanguageProvider from "@/providers/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: '400'
})

export const metadata: Metadata = {
  title: "rafonso.dev | Web Developer",
  description: "A regular portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.className} antialiased`}
      >
        <LanguageProvider>
          <BorderProvider>
            <BorderComponent />
            {children}
          </BorderProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
