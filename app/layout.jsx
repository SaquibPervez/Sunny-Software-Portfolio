import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
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
  description:
    "Sunny Software Inc specializes in custom software development, delivering tailored solutions to meet your business needs.",
  verification: {
    google: "fyxAHon1CukGSkN3Bc2_bf0zvC27zuDReGfOUSwC0NU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
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
