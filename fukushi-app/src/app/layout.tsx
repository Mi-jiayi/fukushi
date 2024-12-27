import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-gray-100">
          <header className="bg-gray-200 p-4 flex justify-between items-center">
            <a href="#" className="text-gray-800 font-semibold">← 一覧に戻る</a>
            <div className="flex items-center">
              <span className="text-gray-800">account</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 10a3 3 0 100-6 3 3 0 000 6zM2 17a8 8 0 1116 0H2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
