"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { Kbd } from "./ui/kbd";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [toggleCount, setToggleCount] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme, setTheme]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return;
      }

      if (event.key.toLowerCase() === "t") {
        setToggleCount(prevCount => {
          const newCount = prevCount + 1;
          console.log(newCount);
          if (newCount <= 5) {
            toggleTheme();
          }
          return newCount;
        });
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [toggleTheme]);

  useEffect(() => {
    if (toggleCount > 5) {
      console.log("here");
      setIsDialogOpen(true);

      const audio = new Audio('/dark_souls.mp3');
      audio.volume = 0.1;
      audio.play().catch((error) => {
        console.error('Audio playback failed:', error);
        setTimeout(() => {
          audio.play().catch(console.error);
        }, 100);
      });
    }
  }, [toggleCount]);

  useEffect(() => {
    const timer = setInterval(() => setToggleCount(0), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <button
      className="hover:text-accent group flex items-center"
      onClick={toggleTheme}
    >
      <Kbd>t</Kbd> toggle_theme
    </button>
    <Dialog open={isDialogOpen} onOpenChange={(open) => {
      setIsDialogOpen(open);
      if (!open) {
        setToggleCount(0);
      }
    }}>
      <DialogContent className="sm:max-w-[100vw] w-screen bg-black h-screen flex items-center justify-center animate-fade-in transition-all duration-1000">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="flex items-center justify-center text-9xl font-serif text-red-700">
            YOU DIED
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </>
  );
}
