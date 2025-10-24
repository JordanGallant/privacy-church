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

const gtPlanarLight = localFont({
  src: '../public/fonts/GT-Planar-Italic-15-Light-Trial.woff2',
 variable: '--font-gt-planar-light',
  display: 'swap',
});

const gtPlanarBlack = localFont({
  src: '../public/fonts/GT-Planar-Retalic-30-Bold-Trial.woff2',
 variable: '--font-gt-planar-black',
  display: 'swap',
});

const gtPlanarMenu = localFont({
  src: '../public/fonts/GT-Planar-Retalic-30-Regular-Trial.woff2',
 variable: '--font-gt-planar-menu',
  display: 'swap',
});

const gtPlanarHead = localFont({
  src: '../public/fonts/GT-Planar-Italic-30-Light-Trial.woff2',
 variable: '--font-gt-planar-head',
  display: 'swap',
});

const gtDMono = localFont({
  src: '../public/fonts/DMMono-Regular.ttf',
 variable: '--font-dm-mono',
  display: 'swap',
});
const gtPlanarStraight = localFont({
  src: '../public/fonts/GT-Planar-Medium-Trial.woff2',
 variable: '--font-gt-planar-straight',
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
    className={`${geistSans.variable} ${geistMono.variable} ${gtDMono.variable} ${gtPlanarHead.variable} ${gtPlanarStraight.variable} ${gtPlanarLight.variable} ${gtPlanarMenu.variable} ${gtPlanarBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}