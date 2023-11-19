"use client";
import { TabContext, TabContextProps } from "@/contexts/TabContext";
import { Container, Flex, Text } from "@radix-ui/themes";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";

export default function TabMenu() {
  const { handleTabContext } = useContext(TabContext) as TabContextProps;
  const [tab, setTab] = useState({
    cursor: 1,
    pos: 1,
    width: 1,
  });
  const ref = useRef<HTMLSpanElement>(null);

  const ANIMATE_TAB = tab.cursor === 1 ? 0 : tab.pos;

  const handleResize = () => setTab({ ...tab, width: window.innerWidth });

  const switchTo = (selected: number, pos: number) => {
    switch (selected) {
      case tab.cursor:
        return;
      case 1:
        setTab({ ...tab, cursor: selected, pos: 0 });
        return;
      case 2:
        setTab({ ...tab, cursor: selected, pos });
        return;
      case 3:
        setTab({ ...tab, cursor: selected, pos: pos * (selected - 1) });
        return;
      default:
        setTab({ ...tab, cursor: selected, pos: pos * (selected - 1) });
        return;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    handleTabContext(tab.cursor);
  }, [tab.cursor]);

  useEffect(() => {
    const pos = ref.current!.getBoundingClientRect().width;
    switchTo(tab.cursor, pos);
  }, [tab.width]);

  const swicthTab = (e: React.SyntheticEvent, selected: number) => {
    const pos = ref.current!.getBoundingClientRect().width;
    switchTo(selected, pos);
  };

  return (
    <>
      <Container size="1" className="p-[5px] border-b border-slate-100">
        <Flex className="h-7 gap-x-[1px] relative">
          <motion.div
            animate={{
              x: ANIMATE_TAB,
            }}
            className="absolute left-0 bg-blue-500 h-full w-[25%] rounded-lg z-0"
          ></motion.div>
          {tabs.map(({ id, name }, index) => (
            <Text
              key={id}
              ref={ref}
              onClick={(e) => swicthTab(e, index + 1)}
              className={clsx(
                "flex-1 flex items-center justify-center text-[13px] font-semibold relative z-10",
                tab.cursor === id && "text-white"
              )}
            >
              {name}
            </Text>
          ))}
        </Flex>
      </Container>
    </>
  );
}

const tabs = [
  {
    id: 1,
    name: "Acheter",
  },
  {
    id: 2,
    name: "Louer",
  },
  {
    id: 3,
    name: "Services",
  },
  {
    id: 4,
    name: "Jobs",
  },
];
