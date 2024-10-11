import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importa a fonte Inter
import "./globals.css";

// Define a fonte Inter
const inter = Inter({
  subsets: ['latin'], // Adicione subsets conforme necessário
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "V7 - imobiliaria ",
  description: "Espaço dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`} // Adiciona a fonte Inter aqui
      >
        {children}
      </body>
    </html>
  );
}
