"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { DownloadSimple } from "@phosphor-icons/react";

export interface ResumeModalHandle {
  open: () => void;
  close: () => void;
}

const ResumeModal = forwardRef<ResumeModalHandle>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>résumé</DialogTitle>
          <DialogDescription className="flex flex-col gap-1">
            <span>would you like to download my résumé?</span>
            <span className="text-xs text-muted-foreground/70">hint: press tab + enter</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <a
            href="/Zachary_Springer_Resume_QA.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <DownloadSimple size={18} />
            download
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

ResumeModal.displayName = "ResumeModal";

export default ResumeModal;
