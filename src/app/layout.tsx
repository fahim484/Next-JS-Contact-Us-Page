import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FC } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact Us Page | Next.js + TypeScript + Tailwind CSS",
  description:
    "A starter template to build amazing apps with Next.js, TypeScript, and Tailwind CSS",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

const RootLayout:FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
