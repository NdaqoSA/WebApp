import { Box, Text } from "@radix-ui/themes";
import React from "react";
import ChevronDown from "../icons/ChevronDown";
import clsx from "clsx";

interface Props {
  icon: JSX.Element;
  name?: string;
}

export default function FilterButton({ icon, name }: Props) {
  return (
    <Box className="flex h-[31px] items-center gap-x-[10px] px-[13px] py-[11px] bg-gray-100 rounded-[10px]">
      <div
        className={clsx("flex items-center flex-nowrap", name && "gap-x-[5px]")}
      >
        {icon}
        <Text weight="medium" as="p" className="text-[13px] whitespace-nowrap">
          {name}
        </Text>
      </div>
      <ChevronDown w={12} h={7} />
    </Box>
  );
}
