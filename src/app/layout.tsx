import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Đề tài: Độc lập dân tộc & Cách mạng giải phóng dân tộc | Tư tưởng Hồ Chí Minh",
  description: "Website thuyết trình tương tác chuyên đề môn học Tư tưởng Hồ Chí Minh - Lớp HCM202 - Trường Đại học FPT - Nhóm 7 thực hiện.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-light text-text-dark">
        {children}
      </body>
    </html>
  );
}
