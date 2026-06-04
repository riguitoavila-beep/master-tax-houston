'use client'

import { motion } from "framer-motion";

export const BlurredStagger = ({ text = "" }: { text: string }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.012 },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    show:   { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="show"
      className="text-sm leading-[1.8] break-words whitespace-normal"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterAnimation}
          transition={{ duration: 0.28 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};
