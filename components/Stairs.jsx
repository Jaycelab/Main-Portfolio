"use client"; // eslint-disable-line
import { motion } from "framer-motion";

//variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculating the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; //total number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/*render 6 motion divs, each representing a step of the stairs. each div will have the same animation, but with a different delay. Delay is calculated chemically based on it's reversed index creating a staggered effect with decreasing delay for each subsequent step*/}
      {[...Array(6)].map((_, index) => {
        //spread operator to create an array of 6 undefined values
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.1,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1, //staggered delay
            }}
            className="h-full w-full bg-red-900 relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
