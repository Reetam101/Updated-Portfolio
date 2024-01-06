"use client"

import React, { useState, createContext, useContext } from "react";
import { links } from '@/lib/data'
import { SectionType } from "@/lib/types";


type props = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({ children }: props) {
  const [activeSection, setActiveSection] = useState<SectionType>('Home');

  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("useActiveSectionContext must be within an ActiveSectionContextProvider");
  }

  return context;
}