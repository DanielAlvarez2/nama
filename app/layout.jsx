import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {EditModeProvider} from '@/context/EditModeContext.jsx'
import { ExistingImageProvider } from "@/context/ExistingImageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akari @ Aman Hotel NYC",
  description: "Akari Restaurant @ Aman Hotel NYC",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <EditModeProvider>
        <ExistingImageProvider>
          {children}
        </ExistingImageProvider>
        </EditModeProvider>
      </body>
    </html>
  );
}
