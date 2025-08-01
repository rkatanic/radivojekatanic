"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const items = [
  {
    id: 1,
    content: "functional",
    color: "bg-primary",
  },
  {
    id: 2,
    content: "performant",
    color: "bg-amber-400 text-foreground dark:text-background",
  },
  {
    id: 3,
    content: "user-first",
    color: "bg-red-400 text-foreground dark:text-background",
  },
  {
    id: 4,
    content: "accessible",
    color: "bg-blue-300 text-foreground dark:text-background",
  },
  {
    id: 5,
    content: "optimized",
    color: "bg-violet-300 text-foreground dark:text-background",
  },
];

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div> Helping you build</div>
      <AnimatePresence>
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5 sm:left-0 sm:-translate-x-0">
          <motion.div
            key={items[index].id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ ease: "easeOut" }}
            className={cn(
              "text-secondary bg-primary mt-1 flex w-42 items-center justify-center rounded-lg px-2 text-center font-mono tracking-tight whitespace-nowrap will-change-transform",
              items[index].color,
            )}
          >
            {items[index].content}
          </motion.div>
          <div>products.</div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
