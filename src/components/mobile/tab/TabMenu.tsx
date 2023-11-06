"use client";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import clsx from "clsx";
import { useAnimate, useAnimation, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TabMenu() {
  const controls = useAnimation();
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    controls.start({
      left: 0,
    });
  }, []);

  async function tabTransition(pos: number) {
    setSelected(pos);
    switch (pos) {
      case 1: {
        controls.set({
          left: 0,
        });
      }
      case 2: {
        controls.set({
          left: "50%",
        });
      }
      case 3: {
        controls.set({
          right: 0,
        });
      }
    }
  }

  return (
    <Container size="1" className="p-[5px] border-b border-slate-100">
      <Flex className="h-7 gap-x-[1px] relative">
        <motion.div
          animate={controls}
          initial={{
            left: 0,
          }}
          className="absolute left-0 bg-blue-500 h-full w-[33.33%] rounded-lg z-0"
        ></motion.div>
        {tabs.map(({ id, name }) => (
          <Text
            className={clsx(
              "flex-1 flex items-center justify-center text-[13px] font-semibold relative z-10",
              selected === id && "text-white"
            )}
            key={id}
            onClick={() => tabTransition(id)}
          >
            {name}
          </Text>
        ))}
      </Flex>
    </Container>
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
];
