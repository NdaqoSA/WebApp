"use client";
import Settings from "@/components/icons/Settings";
import Location from "@/components/icons/Location";
import Prestation from "@/components/icons/Prestation";
import FilterButton from "@/components/buttons/FilterButton";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Filter() {
  const [width, setWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(sliderRef.current!.scrollWidth - sliderRef.current!.offsetWidth);
  }, []);
  return (
    <motion.div ref={sliderRef} className="w-full overflow-hidden">
      <motion.div
        className="w-full py-[10px] flex gap-2"
        drag="x"
        dragConstraints={{
          right: 0,
          left: -width,
        }}
      >
        {filters.map(({ id, icon, name }) => (
          <FilterButton key={id} icon={icon} name={name} />
        ))}
      </motion.div>
    </motion.div>
  );
}

const filters = [
  {
    id: 1,
    icon: <Settings w={14} h={15} />,
    name: "",
  },
  {
    id: 2,
    icon: <Location w={11} h={15} />,
    name: "Ville, quartier",
  },
  {
    id: 3,
    icon: <Prestation w={17} h={15} />,
    name: "Prestation",
  },
  {
    id: 4,
    icon: <Prestation w={17} h={15} />,
    name: "Autre",
  },
  {
    id: 5,
    icon: <Prestation w={17} h={15} />,
    name: "Emploi",
  },
];
