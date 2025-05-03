import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { SessionProvider } from "next-auth/react";
import { AppProviders } from "@/components/providers/AppProviders";

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
        className={` ${geistMono.variable} antialiased`}>
        <AppProviders>
          <SessionProvider>
            {children}
          </SessionProvider>
        </AppProviders>

      </body>
    </html>
  );
}