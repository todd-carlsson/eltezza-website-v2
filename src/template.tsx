"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.5,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
