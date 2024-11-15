"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <header>
      <div className="w-[95%] p-4 flex items-center justify-center flex-col mx-auto">
        <h1
          className={`w-full py-4 ${silkscreen.className} text-2xl md:text-4xl mb-2 md:mb-4`}
        >
          <Link href="/">MPPlayer</Link>
        </h1>
        <nav
          className={`w-full flex items-center justify-between flex-row ${silkscreen.className} border-2 border-neutral-600/80 rounded-lg`}
        >
          <div>
            <Link
              href="/video"
              className={
                currentPath === "/video"
                  ? "bg-transparent"
                  : "bg-neutral-600/80"
              }
            >
              <button
                className={`transition-all duration-300 p-4 rounded-tr-lg rounded-br-lg`}
              >
                Video
              </button>
            </Link>
            <Link
              href="/audio"
              className={
                currentPath === "/video"
                  ? "bg-transparent"
                  : "bg-neutral-600/80"
              }
            >
              <button className={`transition-all duration-300 p-4 rounded-lg`}>
                Audio
              </button>
            </Link>
          </div>
          <div>
            <button>List View</button>
            <button>Grid View</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
