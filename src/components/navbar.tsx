"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Kbd } from "./ui/kbd";

export default function Navbar() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return
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
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router])

  return (
    <div className="flex flex-row justify-between items-center gap-4 mb-8">
      <div className="flex gap-4">
        <Link href={"/"} className="hover:text-accent transition-all duration-200 flex items-center gap-2 group">
          <Kbd>h</Kbd>
          <span>home</span>
        </Link>
        <Link href={"/projects"} className="hover:text-accent transition-all duration-200 flex items-center gap-2 group">
          <Kbd>p</Kbd>
          <span>projects</span>
        </Link>
        <Link href={"/resume"} className="hover:text-accent transition-all duration-200 flex items-center gap-2 group">
          <Kbd>r</Kbd>
          <span>resume</span>
        </Link>
      </div>
      <ThemeToggle />
    </div>
  );
}
