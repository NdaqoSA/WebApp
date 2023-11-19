"use client";
import Services from "./@services/page";
import Rent from "./@rent/page";
import Purchase from "./@purchase/page";
import Jobs from "./@jobs/page";
import { useContext } from "react";
import { TabContext, TabContextProps } from "@/contexts/TabContext";

interface SelectedTabProps {
  cursor: number;
}

function SelectedTab({ cursor }: SelectedTabProps) {
  switch (cursor) {
    case 1:
      return <Purchase />;
    case 2:
      return <Rent />;
    case 3:
      return <Services />;
    case 4:
      return <Jobs />;
    default:
      return <Purchase />;
  }
}

export default function Home() {
  const { tabContext } = useContext(TabContext) as TabContextProps;
  return (
    <main>
      <SelectedTab cursor={tabContext} />
    </main>
  );
}
