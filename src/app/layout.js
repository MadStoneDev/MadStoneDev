import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madstone.Dev - Perfecting the Method, Embracing the Madness",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/fxq5ins.css"/>
    </head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}
