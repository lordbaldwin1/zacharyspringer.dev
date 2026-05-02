"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import ResumeModal, { type ResumeModalHandle } from "./resume-modal";

const ResumeModalOpenContext = createContext<(() => void) | null>(null);

export function useOpenResumeModal() {
  const open = useContext(ResumeModalOpenContext);
  if (!open) {
    throw new Error("useOpenResumeModal must be used within ResumeModalProvider");
  }
  return open;
}

export function ResumeModalProvider({ children }: { children: ReactNode }) {
  const ref = useRef<ResumeModalHandle>(null);
  const open = useCallback(() => {
    ref.current?.open();
  }, []);

  return (
    <ResumeModalOpenContext.Provider value={open}>
      {children}
      <ResumeModal ref={ref} />
    </ResumeModalOpenContext.Provider>
  );
}
