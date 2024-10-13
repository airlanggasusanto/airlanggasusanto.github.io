import type { Metadata } from "next";
import { Kosugi_Maru } from 'next/font/google';
import "./globals.css";

const comicNeue = Kosugi_Maru({
  subsets: ['latin'],
  weight: ['400'], // Choose weights you need
  display: 'swap',               // Improves performance
});

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Github Pages",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={comicNeue.className}>
        {children}
      </body>
    </html>
  );
}
