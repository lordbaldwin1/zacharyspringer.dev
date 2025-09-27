"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Kbd } from "./ui/kbd";

export default function Navbar() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case "h":
          router.push("/");
          break;
        case "p":
          router.push("/projects");
          break;
        case "r":
          router.push("/resume");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  return (
    <div className="mb-12 flex flex-row items-center justify-between gap-4">
      <div className="flex flex-wrap gap-4">
        <Link
          href={"/"}
          className="hover:text-accent group flex items-center transition-all duration-200"
        >
          <Kbd>h</Kbd>
          <span>home</span>
        </Link>
        <Link
          href={"/projects"}
          className="hover:text-accent group flex items-center transition-all duration-200"
        >
          <Kbd>p</Kbd>
          <span>projects</span>
        </Link>
        <Link
          href={"/resume"}
          className="hover:text-accent group flex items-center transition-all duration-200"
        >
          <Kbd>r</Kbd>
          <span>résumé</span>
        </Link>
      </div>
      <ThemeToggle />
    </div>
  );
}
