import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/Components/Nav";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

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
      <body
        className={`${jost.className}  antialiased flex flex-col items-center `}
      >
        <nav className="absolute w-full top-20 max-w-7xl">
          <Nav />
        </nav>
        {children}
      </body>
    </html>
  );
}
