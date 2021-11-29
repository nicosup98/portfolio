import React, { useState, useEffect } from "react";
import { SiAngular, SiReact, SiVueDotJs } from "react-icons/si";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0, },
  hidden: { opacity: 0, x: -100 },
};
export function BackgroundAnimation() {
  const [currentIcon, setCurrentIcon] = useState(Math.floor(Math.random() * 3));
  const Current = (props) => {
    switch (props.icon) {
      case 0:
        return <SiAngular size="40rem" />;
      case 1:
        return <SiReact size="40rem" />;

      default:
        return <SiVueDotJs size="40rem" />;
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <motion.figure variants={item} transition={{delay:1}}><Current icon={currentIcon}/></motion.figure>
    </motion.div>
  );
}
