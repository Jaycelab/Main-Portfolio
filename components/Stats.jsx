"use client";

import CountUp from "react-countup";

{
  /*non-dynamic for now*/
}
const stats = [
  {
    num: 18,
    text: "Technologies Learned",
  },
  {
    num: 348,
    text: "Hours Coded",
  },
  {
    num: 1110,
    text: "Commits",
  },
  {
    num: 11,
    text: "Projects Completed",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto p-5  xl:max-w-none ">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start bg-secondary/20 p-4 rounded-lg shadow-lg"
                key={index}
              >
                <CountUp
                  enableScrollSpy={true}
                  end={item.num}
                  duration={5}
                  delay={3}
                  className="text-2xl  xl:text-4xl font-extrabold "
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[125px]" : "max-w[150px]"
                  } leading-snug text-white/80  sm:text-xs  xl:text-xl`}
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
