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
    num: 420,
    text: "Hours Coded",
  },
  {
    num: 1200,
    text: "Commits",
  },
  {
    num: 12,
    text: "Projects",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto  xl:max-w-none ">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-2 items-center justify-center xl:justify-start sm:bg-secondary/30 p-2 rounded-lg shadow-lg lg:p-4 lg:gap-4 xl:rounded-xl xl:shadow-xl"
                key={index}
              >
                <CountUp
                  enableScrollSpy={true}
                  end={item.num}
                  duration={5}
                  delay={3}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold "
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[150px]" : "max-w-[300px]"
                  } leading-tight text-white/80 text-xs `}
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
