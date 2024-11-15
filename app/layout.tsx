import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
