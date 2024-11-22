"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Outfit } from "next/font/google";
import { SearchBar } from "./SearchBar";
import { ViewModeDropdown } from "./ViewModeDropdown";
import { useState } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function Navbar() {
  const currentPath = usePathname();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const navLinkClasses = (path: string) => `
    inline-block px-4 py-2
    ${
      currentPath === path
        ? "bg-neutral-800/50 text-white"
        : "bg-transparent text-neutral-500 hover:bg-neutral-700/20 hover:text-neutral-300"
    }
    transition-all duration-300
    rounded-lg
    text-xl
  `;

  return (
    <header className="space-y-4">
      <div className="mx-auto my-3 flex w-full items-center justify-between rounded-lg py-4">
        <Link
          href="/"
          className={`${outfit.className} text-xl md:text-3xl transition-opacity hover:opacity-80`}
        >
          Soundsync
        </Link>

        <div className="absolute left-1/2 w-full max-w-md -translate-x-1/2 transform">
          <SearchBar />
        </div>

        <div className="flex items-center space-x-4">
          <ViewModeDropdown />
        </div>
      </div>

      <nav
        className={`
          mx-auto w-max flex justify-center px-2
          ${outfit.className}
          rounded-lg
          py-2
        `}
      >
        <div className="flex space-x-2">
          <Link href="/video" className={navLinkClasses("/video")}>
            Video
          </Link>
          <Link href="/audio" className={navLinkClasses("/audio")}>
            Audio
          </Link>
        </div>
      </nav>
    </header>
  );
}
