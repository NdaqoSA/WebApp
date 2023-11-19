import { Box } from "@radix-ui/themes";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const IconButton = ({ children }: Props) => {
  return (
    <Box className="w-[57px] h-[31px] rounded-[10px] bg-gray-100 flex justify-center items-center gap-x-1 ">
      {children}
    </Box>
  );
};

export default IconButton;
