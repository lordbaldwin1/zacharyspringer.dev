"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";


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
      <button className="hover:text-muted-foreground" onClick={toggleTheme}>
        [t]oggle_theme
      </button>
    );
  }

  return (
    <button className="hover:text-muted-foreground" onClick={toggleTheme}>
      [t]oggle_theme
    </button>
  );
}
