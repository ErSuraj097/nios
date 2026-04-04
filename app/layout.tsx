import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext';

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
