import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import { DynamicTitle } from "./ui/DynamicTitle";

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
      <body className="mx-auto max-w-[90%] md:max-w-[95%]">
        <DynamicTitle />
        <Navbar />
        <div className="mt-12 md:mt-10">{children}</div>
      </body>
    </html>
  );
}
