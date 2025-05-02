import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";

// Update your font declarations
// const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "N8N-Agent",
  description: "an employee that responds and does what its been told to do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistMono.variable} antialiased`}
      >{children}</body>
    </html>
  );
}