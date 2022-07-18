import React, { useState, useEffect } from "react";
import { SiAngular, SiElixir, SiGo, SiReact, SiGit, SiRust, SiSvelte } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

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
  <SiSvelte size="40rem" />,
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
      <motion.figure variants={item} >
        {icons[icon]}
      </motion.figure>
    );
  };
  function getRandomInt(min, max) {       
    // Create byte array and fill with 1 random number
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    // Convert to decimal
    var randomNum = '0.' + byteArray[0].toString();

    // Get number in range
    randomNum = Math.floor(randomNum * (max - min + 1)) + min;

    return randomNum;
}

  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentIcon(Math.floor(Math.random() * icons.length));
      setCurrentIcon(getRandomInt(0,icons.length -1))
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
      <motion.div variants={variants} initial="hidden" exit={{x: 100, opacity:0, duration: 0.5}} animate="visible">
        <Current icon={currentIcon} />
      </motion.div>
  );
}
