import type { Metadata } from "next";
import { Vibur } from "next/font/google";
import "./globals.css";

const vibur = Vibur({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cplay Next",
  description: "coming soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${vibur.className}`}>
      <body className="h-full bg-[#112] bg-[url('//images.weserv.nl/?url=i.imgur.com/6QJjYMe.jpg')] bg-center bg-no-repeat bg-cover m-0">
        {children}
      </body>
    </html>
  );
}
