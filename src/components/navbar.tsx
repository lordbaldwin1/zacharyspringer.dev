"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";

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
    <div className="flex flex-row justify-start gap-4 mb-8">
      <div className="flex flex-row items-center gap-4">
        <Link href={"/"} className="hover:text-muted-foreground transition-all duration-200">[h]ome</Link>
        <Link href={"/projects"} className="hover:text-muted-foreground transition-all duration-200">[p]rojects</Link>
        <Link href={"/resume"} className="hover:text-muted-foreground transition-all duration-200">[r]esume</Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
