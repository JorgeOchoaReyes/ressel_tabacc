import React, { type Dispatch, type SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Tabs: React.FC<{
    tabs: string[];
}> = ({ tabs }) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  }); 

  const [chosenTabPosition, setChosenTabPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      {tabs.map((tab) => (
        <Tab key={tab} setPosition={setPosition} setChosenTabPosition={setChosenTabPosition} >
          {tab}
        </Tab>
      ))}

      <Cursor position={position} chosenCursor={true} />
      <Cursor position={chosenTabPosition} chosenCursor={false} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  setChosenTabPosition,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  setChosenTabPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setChosenTabPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position, chosenCursor }: { position: Position, chosenCursor: boolean }) => {
  const bg = chosenCursor ? "bg-slate-800" : "bg-black";
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className={`absolute z-0 h-7 rounded-full md:h-12 ${bg}`}
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};