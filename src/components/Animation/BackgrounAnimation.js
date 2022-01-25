import React, { useState, useEffect } from "react";
import { SiAngular, SiElixir, SiGo, SiReact, SiGit, SiRust } from "react-icons/si";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { when: "afterChildren", duration: 0.5 },
  },
  hidden: { opacity: 0, x: -100 },
};
const icons = [
  <SiAngular size="40rem" />,
  <SiReact size="40rem" />,
  <SiGo size="40rem" />,
  <SiRust size="40rem" />,
  <SiElixir size="40rem" />,
  <SiGit size="40rem" />,
];
export function BackgroundAnimation() {
  const [currentIcon, setCurrentIcon] = useState(
    Math.floor(Math.random() * icons.length)
  );
  const Current = ({ icon }) => {
    return (
      <motion.figure variants={item} transition={{ delay: 0.75 }}>
        {icons[icon]}
      </motion.figure>
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(Math.floor(Math.random() * icons.length));
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <Current icon={currentIcon} />
    </motion.div>
  );
}
