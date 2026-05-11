import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from './ClientLayout';
<<<<<<< HEAD

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-plus-jakarta" 
});

export const metadata: Metadata = {
  title: "Samskrit Bharti | AI-Driven National LMS",
  description: "Advanced AI-driven Learning Management System for the National Institute of Open Schooling",
  icons: {
    icon: '/favicon.ico',
=======
import { HydrationFix } from "@/components/HydrationFix";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  title: "National Institute of Open Schooling | AI-Driven National LMS",
  description: "Advanced AI-driven Learning Management System for the National Institute of Open Schooling (NIOS)",
  icons: {
    icon: '/NIOS.png',
>>>>>>> main
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
=======
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        <HydrationFix />
>>>>>>> main
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
