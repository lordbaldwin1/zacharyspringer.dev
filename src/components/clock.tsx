"use client";

import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Loader } from "lucide-react";

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Prevent hydration mismatch by not rendering clock until mounted
  if (!mounted || !time) {
    return (
      <div className="flex flex-row items-center gap-2 mb-2">
        <div><Loader className="animate-spin" /></div>
      </div>
    );
  }

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  let text = "sleeping"
  if (hours >= 9 && hours < 13) {
    text = "working"
  } else if (hours >= 13 && hours < 14) {
    text = "eating"
  } else if (hours >= 14 && (hours < 17 || (hours === 17 && minutes < 30))) {
    text = "working"
  } else if ((hours === 17 && minutes >= 30) || (hours >= 18 && hours < 19)) {
    text = "working out"
  } else if (hours >= 19 && hours < 22) {
    text = "programming"
  } else if (hours >= 22) {
    text = "hanging out with my gf"
  }

  const secondDeg = seconds * 6; // 60s → 360°
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="flex flex-row items-center gap-2 mb-2">
      <Tooltip>
        <TooltipTrigger>
          <svg viewBox="0 0 200 200" width="20" height="20">
            {/* clock face */}
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="var(--background)"
              stroke="var(--muted-foreground)"
              strokeWidth="8"
            />

            {/* hour hand */}
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="60"
              stroke="var(--muted-foreground)"
              strokeWidth="16"
              strokeLinecap="round"
              transform={`rotate(${hourDeg} 100 100)`}
            />

            {/* minute hand */}
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="40"
              stroke="var(--muted-foreground)"
              strokeWidth="12"
              strokeLinecap="round"
              transform={`rotate(${minuteDeg} 100 100)`}
            />

            {/* second hand */}
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              stroke="var(--muted-foreground)"
              strokeWidth="8"
              strokeLinecap="round"
              transform={`rotate(${secondDeg} 100 100)`}
            />

            {/* center pin */}
            <circle cx="100" cy="100" r="4" fill="var(--foreground)" />
          </svg>
        </TooltipTrigger>
        <TooltipContent>
          <p>{time.toLocaleTimeString()}</p>
        </TooltipContent>
      </Tooltip>
      <p>{`right now I'm probably ${text}`}</p>
    </div>
  );
}
