"use client";

import { motion } from "framer-motion";
import React from "react";

export function Boxes() {
  const rows = 8;
  const cols = 12;
  
  const boxVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const generateBoxes = () => {
    const boxes = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        boxes.push(
          <motion.div
            key={`${i}-${j}`}
            variants={boxVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: (i + j) * 0.1,
            }}
            className="h-20 w-20 bg-primary/10 border border-primary/20 rounded-lg"
            style={{
              gridRow: i + 1,
              gridColumn: j + 1,
            }}
          />
        );
      }
    }
    return boxes;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "1rem",
        padding: "2rem",
        position: "absolute",
        inset: 0,
      }}
      className="opacity-40"
    >
      {generateBoxes()}
    </div>
  );
}