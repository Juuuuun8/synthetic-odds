import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    // ▼▼ 新しいアプリを作るたびに、ここの 'アプリ名' を書き換えてください ▼▼
    template: '%s | 最速合成オッズ計算機',
    default: '最速合成オッズ計算機', // ← タイトル設定がないページで表示される名前
  },
  description: "最速合成オッズ計算機は、競馬や競輪などの複数のオッズから、合成オッズを計算するアプリケーションです。", // ← ここもアプリの説明文に変える
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: '/icon.png',
  },
  // Google Search Consoleの所有権確認コードを入れる場所を確保
  verification: {
    google: "ここに確認コードを入れる",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-slate-900`}
      >
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
