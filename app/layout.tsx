import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoJaye - Move. Earn. Grow.",
  description: "Jaye is your go-to for stylish and quality rides. Book a ride, rent a car, or hire a driver.",
  icons: {
    icon: "/images/jaye-logo.png",
    apple: "/images/jaye-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#F6F7F9' }}>{children}</body>
    </html>
  );
}
