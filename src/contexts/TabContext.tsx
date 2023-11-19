"use client";
import React, { createContext, useState } from "react";

export interface TabContextProps {
  tabContext: number;
  handleTabContext: (cursor: number) => void;
}
export const TabContext = createContext<TabContextProps | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function TabProvider({ children }: Props) {
  const [tabContext, setTabContext] = useState<number>(1);
  const handleTabContext = (cursor: number) => setTabContext(cursor);
  return (
    <TabContext.Provider value={{ tabContext, handleTabContext }}>
      {children}
    </TabContext.Provider>
  );
}
