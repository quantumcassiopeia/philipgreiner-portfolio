import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/Components/Nav";

export const metadata: Metadata = {
  title: "Philip Greiner",
  description: "Philip Greiner Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased flex flex-col items-center`}>
        <nav className="absolute top-20 w-full max-w-7xl">
          <Nav />
        </nav>
        {children}
      </body>
    </html>
  );
}
