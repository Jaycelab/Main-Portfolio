"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.1, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/*exit*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 3, duration: 0.4, ease: "easeOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute "
        >
          {/*Profile Photo
          alternative class object-contain*/}
          <Image
            priority
            src="/images/profile-red.png"
            className="rounded-full"
            quality={100}
            fill
            alt=""
          />
        </motion.div>

        {/*circle absolute top-0 left-0 w-full h-full xl:w-[498px] xl:h-[498px]*/}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBow="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#A91717"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25 ", "16 25 92 72", "4 250 22 22"],
              transition: {
                delay: 1.5,
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
              rotate: [120, 360],
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
