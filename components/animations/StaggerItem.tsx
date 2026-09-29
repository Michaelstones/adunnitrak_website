"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  id?: string;
}

export function StaggerItem({ children, className = "", yOffset = 20, id }: StaggerItemProps) {
  return (
    <motion.div
      id={id}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
