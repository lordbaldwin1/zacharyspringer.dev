"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Kbd } from "./ui/kbd";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ListIcon, TextOutdentIcon } from "@phosphor-icons/react/dist/ssr";

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
    <div className="mb-12 flex flex-row items-center justify-end sm:justify-between gap-4">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex items flex-wrap gap-4">
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
      
      {/* Desktop Theme Toggle */}
      <div className="hidden sm:block">
        <ThemeToggle />
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="sm:hidden flex justify-end">
        <Sheet>
          <SheetTrigger asChild className="-mb-4">
            <button className="hover:text-accent transition-colors">
              <ListIcon size={30} />
              <span className="sr-only">Open menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>navigation</SheetTitle>
              <SheetDescription>
                tap the links to navigate.
              </SheetDescription>
            </SheetHeader>
              <div className="flex flex-col gap-6 ml-6">
                <SheetClose asChild>
                  <Link
                    href={"/"}
                    className="hover:text-accent group flex items-center transition-all duration-200"
                  >
                    <Kbd>h</Kbd>
                    <span>home</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={"/projects"}
                    className="hover:text-accent group flex items-center transition-all duration-200"
                  >
                    <Kbd>p</Kbd>
                    <span>projects</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={"/resume"}
                    className="hover:text-accent group flex items-center transition-all duration-200"
                  >
                    <Kbd>r</Kbd>
                    <span>résumé</span>
                  </Link>
                </SheetClose>
                <div>
                  <ThemeToggle />
                </div>
              </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
