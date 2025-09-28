import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, end: 3, suffix: "+ Pilot", label: " Programs Launched" },
  { id: 2, end: 15, suffix: "+ Active", label: "Students mentored" },
  { id: 3, end: 2, suffix: " +", label: "University Collaborations ", isMillion: true },
  { id: 4, end: 120, suffix: "+", label: "Community Members Engaged" },
];

const CounterSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative z-10 bg-primery text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red">
          Impact
        </h2>
        <p className="mt-4 text-base md:text-lg text-white max-w-3xl mx-auto">
          Targets & verified results published in our annual report.
        </p>

        {/* Stats */}
        <div
          ref={ref}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center bg-primery rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white">
                {inView && !stat.isMillion ? (
                  <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} />
                ) : inView && stat.isMillion ? (
                  <>
                    <CountUp end={stat.end} duration={2.5} /> +
                  </>
                ) : (
                  "0"
                )}
              </div>
              <p className="mt-2 text-sm md:text-base text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        {/* <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#impact"
            className="px-6 py-3 rounded-full bg-transparent border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-blue-900 transition-colors duration-300"
          >
            SEE OUR IMPACT
          </a>
          <a
            href="#give"
            className="px-6 py-3 rounded-full bg-lime-400 text-blue-900 font-semibold hover:bg-lime-500 transition-colors duration-300"
          >
            GIVE TO IMPACT
          </a>
        </div> */}
      </div>

      {/* Background pattern optional */}
      <div className="absolute -z-1 inset-0 bg-[url('https://ewb-usa.org/images/pattern-bg.svg')] opacity-50" />
    </section>
  );
};

export default CounterSection;
