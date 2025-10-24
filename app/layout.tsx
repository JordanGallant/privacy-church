import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gtPlanar = localFont({
  src: '../public/fonts/GT-Planar/GT-Planar-Retalic-15-Bold-Trial.woff2',
  variable: '--font-gt-planar',
  style: 'italic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Privacy Church",
  description: "Keep News Private",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gtPlanar.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}