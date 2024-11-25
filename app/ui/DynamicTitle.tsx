"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function DynamicTitle() {
  const pathname = usePathname();

  useEffect(() => {
    const pathTitles: { [key: string]: string } = {
      "/": "Home",
      "/video": "Video",
      "/audio": "Audio",
    };

    const pathTitle = pathTitles[pathname] || "Page";
    document.title = `${pathTitle} / Soundsync`;
  }, [pathname]);

  return null;
}
