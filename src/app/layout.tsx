import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./assets/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rockstar Games",
  description: "The official home of Rockstar Games",
  keywords: [
    "Rockstar Games",
    "Rockstar",
    "Video Games",
    "Games",
    "Gaming",
    "Grand Theft Auto",
    "GTA",
    "GTAV",
    "GTA 5",
    "GTA Online",
    "GTA+",
    "GTA Plus",
    "Red Dead Redemption",
    "RDR",
    "Red Dead Online",
    "PS5",
    "PlayStation",
    "Xbox Series X",
    "Xbox Series S",
    "Xbox",
    "PC Games",
    "Computer Games",
    "Home Entertainment",
    "Home Gaming",
    "New Video Games",
    "Videogames",
    "LA Noire",
    "L.A. Noire",
    "Max Payne 3",
    "Max Payne",
    "Vice City",
    "San Andreas",
    "Liberty City",
    "Los Santos",
    "Vinewood",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
