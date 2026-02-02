import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import FooterMinimal from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sunny Software Inc - Custom Software Development",
  description: "Sunny Software Inc specializes in custom software development, delivering tailored solutions to meet your business needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="e n" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <FooterMinimal />
      </body>
    </html>
  );
}
