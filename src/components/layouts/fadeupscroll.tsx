import React from "react";
import { motion } from "framer-motion";

const variants = {
  // hidden: { opacity: 0, x: 0, y: 20 },
  // enter: { opacity: 1, x: 0, y: 0 },
  // exit: { opacity: 0, x: -0, y: 20 },

  offscreen: {
    y: 25,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "linear",
      bounce: 0.4,
      duration: 0.75,
    },
  },
};

const Fadeupscroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={variants}>{children}</motion.div>
    </motion.div>
  );
};

export default Fadeupscroll;
