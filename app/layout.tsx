import { AuthContextProvider } from "@/components/Ctx/AuthContext";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import React from "react";

const mainFont = Comfortaa({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Quickstaff",
  description: "Find the right staff for your events!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, user-scalable=0"
        />
      </Head>
      <html lang="en" className="!scroll-smooth min-w-screen max-h-screen">
        <body suppressHydrationWarning={true} className={mainFont.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthContextProvider>
  );
}
