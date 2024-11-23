"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Outfit } from "next/font/google";
import { PiWaveformFill } from "react-icons/pi";
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

  const navPageClasses = (path: string) => `
    inline-block p-2 pt-3
    ${
      currentPath === path
        ? "text-white"
        : "bg-transparent text-neutral-500 hover:bg-neutral-700/20 hover:text-neutral-300"
    }
    transition-all duration-300
    text-base
  `;

  return (
    <header className="space-y-4">
      <div className="mx-auto my-1 flex w-full items-center justify-between rounded-lg py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`${outfit.className} text-xl md:text-2xl transition-opacity hover:opacity-80`}
          >
            <div className="fixed flex items-center space-x-2 mix-blend-difference md:relative md:mix-blend-normal">
              <PiWaveformFill className="mr-1" />
              Soundsync
            </div>
          </Link>
          <nav
            className={`
          mx-auto w-max flex justify-center px-2
          ${outfit.className}
          rounded-lg
          py-2
        `}
          >
            <div className="ml-4 hidden space-x-2 md:block">
              <Link href="/" className={navPageClasses("/")}>
                Home
              </Link>
              <Link href="/discover" className={navPageClasses("/discover")}>
                Discover
              </Link>
            </div>
          </nav>
        </div>

        <div className="absolute left-1/2 hidden w-full max-w-md -translate-x-1/2 transform md:block">
          <SearchBar />
        </div>

        <div className="hidden items-center space-x-4 md:block">
          <ViewModeDropdown />
        </div>
      </div>

      <nav
        className={`
          mx-auto w-max flex justify-center px-2 mt-4
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
