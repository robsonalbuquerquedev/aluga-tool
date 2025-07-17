// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AlugaTool",
  description: "Sua ferramenta, sua renda!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="pt-20"> {/* padding-top para evitar o header sobrepor o conteúdo */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
