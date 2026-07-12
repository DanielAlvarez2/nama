import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {EditModeProvider} from '@/context/EditModeContext.jsx'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nama @ Aman Hotel NYC",
  description: "Nama Restaurant @ Aman Hotel NYC",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <EditModeProvider>
          {children}
        </EditModeProvider>
      </body>
    </html>
  );
}
