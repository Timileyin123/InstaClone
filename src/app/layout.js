import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram Clone",
  description: "Instagram Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className && "bg-gray-50"}>{children}</body>
    </html>
  );
}
