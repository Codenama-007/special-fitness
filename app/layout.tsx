import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SP Fitness | Premium training, real results",
  description:
    "SP Fitness delivers premium coaching, strength programming, and a focused training environment for ambitious members.",
    verification : {
      google : "1QY909zXbWm-Y7tFOQaPMs4vTCBaZyUrsN4C8t3s9HU"
    }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Toaster/>
      </body>
      
    </html>
  );
}
