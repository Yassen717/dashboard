"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/login" && pathname !== "/signup";
  return (
    <html lang="en">
      <body style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
        {showSidebar && <Sidebar />}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header can go here if needed */}
          <main style={{ flex: 1, padding: '2rem' }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
