"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight, BsArrowBarDown } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Front-End",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsa inventore aliquid, similique voluptas earum.",
    href: "",
  },
  {
    num: "02",
    title: "Back-End",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsa inventore aliquid, similique voluptas earum.",
    href: "",
  },
  {
    num: "03",
    title: "Full-Stack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsa inventore aliquid, similique voluptas earum.",
    href: "",
  },
  {
    num: "04",
    title: "Turtle Walker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsa inventore aliquid, similique voluptas earum.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        {/*grid column container*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {/*CONTAINER flex section*/}
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group text-white/80"
              >
                {/*Top section*/}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 text-primary hover:text-white"
                  >
                    <BsArrowDownRight className="text-3xl" />
                  </Link>
                </div>

                {/*title*/}
                <h2 className="text-[42px] font-bold leading-none text-accent/90 group-hover:text-white transition-all duration-500">
                  {service.title}
                </h2>
                {/*description*/}
                <p className="text-white/90">{service.description}</p>
                {/*border*/}
                <div className="border-b-2 border-secondary/50 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
