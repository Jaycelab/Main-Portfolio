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
    num: 1110,
    text: "Total Commits",
  },
  {
    num: 11,
    text: "Projects Completed",
  },
  {
    num: 348,
    text: "Hours Coded",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
                key={index}
              >
                <div>
                  <CountUp
                    end={stat.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <p
                    className={`${
                      stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    }`}
                  >
                    {stat.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
