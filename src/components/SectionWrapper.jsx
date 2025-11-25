// src/components/SectionWrapper.jsx
import React from "react";
import { motion } from "framer-motion";

const getDirection = (direction) => {
  switch (direction) {
    case "left":
      return { x: -80, opacity: 0 };
    case "right":
      return { x: 80, opacity: 0 };
    case "up":
      return { y: 80, opacity: 0 };
    default:
      return { opacity: 0 };
  }
};

const SectionWrapper = ({ children, id, direction = "up", className = "" }) => {
  const initial = getDirection(direction);

  return (
    <motion.section
      id={id}
      initial={initial}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
