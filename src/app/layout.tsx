import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
})

const mont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CyberLab - Security Tools & Resources",
  description: "Atividade prática de Next.js, API REST e TypeScript",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html
      lang="pt-BR"
    >
      <body className={`${inter.variable} ${mont.className} bg-slate-900 text-white min-h-screen`}>
          {children}
      </body>
    </html>
  );
}
