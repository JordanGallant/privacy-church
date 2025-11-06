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
  src: '../public/fonts/GT-Planar-Retalic-30-Black-Trial.woff2',
 variable: '--font-gt-planar-black',
  display: 'swap',
});

const gtPlanarMenu = localFont({
  src: '../public/fonts/GT-Planar-Retalic-15-Regular-Trial.woff2',
 variable: '--font-gt-planar-menu',
  display: 'swap',
});

const gtPlanarHead = localFont({
  src: '../public/fonts/GT-Planar-Italic-30-Bold-Trial.woff2',
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
const Elevatica = localFont({
  src: '../public/fonts/Elevatia-Regular.ttf',
 variable: '--font-elevatica',
  display: 'swap',
});

const Menusmall = localFont({
  src: '../public/fonts/GT-Planar-Regular-Trial.woff2',
 variable: '--font-gt-planar-menusmall',
  display: 'swap',
});
const Image = localFont({
  src: '../public/fonts/GT-Planar-Retalic-15-Medium-Trial.woff2',
 variable: '--font-gt-planar-image',
  display: 'swap',
});

const Heading = localFont({
  src: '../public/fonts/GT-Planar-Italic-45-Medium-Trial.woff2',
 variable: '--font-gt-planar-heading',
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
  className={`${geistSans.variable} ${Menusmall.variable} ${Heading.variable} ${Image.variable} ${geistMono.variable} ${gtDMono.variable} ${Elevatica.variable} ${gtPlanarHead.variable} ${gtPlanarStraight.variable} ${gtPlanarLight.variable} ${gtPlanarMenu.variable} ${gtPlanarBlack.variable} antialiased bg-white md:bg-[#280cfb] md:flex md:justify-center md:items-center md:h-screen md:p-8 md:overflow-hidden`}
>
  <div className="w-full h-full md:max-w-[420px] md:max-h-full md:shadow-2xl md:bg-white md:overflow-y-auto md:rounded-[32px] scrollbar-hide">
    {children}
  </div>
</body>
    </html>
  );
}