import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";

export const metadata: Metadata = {
  title: "MPPlayer",
  description:
    "A Music & Video Streaming app with minimal layout and UI/UX-friendly experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
