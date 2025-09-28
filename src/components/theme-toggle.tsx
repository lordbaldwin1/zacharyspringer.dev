"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { Kbd } from "./ui/kbd";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { GhostIcon } from "@phosphor-icons/react/dist/ssr";

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
        setToggleCount((prevCount) => {
          const newCount = prevCount + 1;
          console.log(newCount);
          
          if (newCount <= 10) {
            setTimeout(() => toggleTheme(), 0);
          }
          
          return newCount;
        });
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [toggleTheme]);

  useEffect(() => {
    if (toggleCount === 10) {
      console.log("here");

      // Use setTimeout to ensure this runs after the current render cycle
      setTimeout(() => {
        setIsDialogOpen(true);
      }, 0);

      const audio = new Audio("/dark_souls.mp3");
      audio.volume = 0.1;
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
        setTimeout(() => {
          audio.play().catch(console.error);
        }, 100);
      });
    }
  }, [toggleCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      setToggleCount(0);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="hover:text-accent group flex items-center"
            onClick={toggleTheme}
          >
            <Kbd>t</Kbd> toggle_theme
          </button>
        </TooltipTrigger>
        <TooltipContent className="flex flex-row items-center gap-2">
          <GhostIcon />{`don't press 10x fast`}
        </TooltipContent>
      </Tooltip>
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setToggleCount(0);
          }
        }}
      >
        <DialogContent className="animate-fade-in flex h-screen w-screen items-center justify-center bg-black transition-all duration-1000 sm:max-w-[100vw]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription className="flex items-center justify-center font-serif text-9xl text-red-700">
              YOU DIED
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
