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
          transition: { delay: 1.5, duration: 1.5, ease: "easeIn" },
        }}
      >
        {/*exit*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 1.5, ease: "easeOut" },
          }}
          className="w-[298px] xl:w-[506px] h-[298px] xl:h-[506px] mix-blend-lighten absolute"
        >
          {/*Profile Photo
          alternative class object-contain*/}
          <Image
            priority
            src="/images/profile-red.png"
            className="rounded-full"
            quality={100}
            fill="transparent"
            alt=""
          />
        </motion.div>

        {/*circle absolute top-0 left-0 w-full h-full xl:w-[498px] xl:h-[498px]*/}
        <motion.svg
          className="w-[298px] xl:w-[506px] h-[298px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        ></motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
