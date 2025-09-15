import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { initializeStaticData } from '@/lib/static-data';
import "./globals.css";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});import "./globals.css";

export const metadata: Metadata = { title: "GitHub Pages", description: "" };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    await initializeStaticData();
  return (
     <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.className} bg-white text-black antialiased dark:bg-gray-950 dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Header />
            {children}
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
