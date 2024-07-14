"use client";

import CountUp from "react-countup";

{
  /*non-dynamic for now. With Goal Stats */
}
const stats = [
  {
    num: 20,
    text: "Techs Learned",
  },
  {
    num: 382,
    text: "Hours Coded",
  },
  {
    num: 1262,
    text: " Total Commits",
  },
  {
    num: 13,
    text: "Projects Completed",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto  xl:max-w-none ">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-2 items-center justify-center xl:justify-start sm:bg-secondary/30 p-0 sm:p-4 rounded-lg shadow-lg  lg:gap-4  xl:rounded-xl xl:shadow-xl"
                key={index}
              >
                <CountUp
                  enableScrollSpy={true}
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold "
                />
                <p
                  className={`${
                    item.text.length < 20 ? "max-w-[150px]" : "max-w-[200px]"
                  } text-xs md:text-base leading-tight text-white/80 `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Stats;
