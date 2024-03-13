import React, { ReactHTMLElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animateText = (
  text: React.ReactNode | null | undefined,
  className: string
) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={text?.toString() || "defaultKey"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {text}
    </motion.div>
  </AnimatePresence>
);

export default animateText;
