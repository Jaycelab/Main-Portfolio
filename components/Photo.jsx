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
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/*exit*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.5, duration: 0.4, ease: "easeOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          {/*alternative object-contain*/}
          <Image
            priority
            src="/images/profile-red.png"
            className="rounded-full"
            quality={100}
            fill
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
