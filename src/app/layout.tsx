import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O corpo arte",
  description: "Site institucional da escola o corpo arte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
