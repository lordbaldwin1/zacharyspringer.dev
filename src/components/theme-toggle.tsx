"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { Kbd } from "./ui/kbd";


export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
  }, [theme, setTheme]);

  useEffect(() => {
    setMounted(true);
    
    const handleKeyPress = (event: KeyboardEvent) => {
        if (document.activeElement?.tagName === "INPUT" ||
            document.activeElement?.tagName === "TEXTAREA" ||
            event.target instanceof HTMLInputElement
        ) {
            return
        }

        if (event.key.toLowerCase() === "t") {
            toggleTheme();
        }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [toggleTheme]);

  if (!mounted) {
    return (
      <button className="hover:text-accent flex items-center group" onClick={toggleTheme}>
        <Kbd>t</Kbd> toggle_theme
      </button>
    );
  }

  return (
    <button className="hover:text-accent flex items-center group" onClick={toggleTheme}>
      <Kbd>t</Kbd> toggle_theme
    </button>
  );
}
