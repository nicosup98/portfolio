import React from 'react';
import { motion } from 'framer-motion'

const setence = {
  hidden:{ opacity: 1},
  visible:{
    opacity:1,
    transition: {
      delay:0,
      staggerChildren:0.05
    }
  }
}

const letter = {
  hidden:{opacity:0, y: 50},
  visible: {
    opacity: 1,
    y: 0
  }
}
const TextAnimation = (props) => (
  <motion.div 
    variants={setence} 
    initial='hidden'
    animate='visible'

  >
  {props.text.split('').map((char,i)=>(
    <motion.span
      key={i}
      variants={letter}
      transition={{duration:0}}
      
    >
      {char}
    </motion.span>
  ))}
  </motion.div>
);

export default TextAnimation;