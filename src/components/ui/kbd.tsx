import * as React from "react";
import { cn } from "~/lib/utils";

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center h-5 w-5 text-xs font-medium text-muted-foreground bg-muted border shadow-sm rounded border-border transition-all hover:shadow-md dark:shadow-sm dark:bg-muted/50 dark:border-border group-hover:translate-x-0.25 group-hover:translate-y-0.5",
          className
        )}
        {...props}
      >
        <span className="">{children}</span>
      </kbd>
    );
  }
);

Kbd.displayName = "Kbd";

export { Kbd };
