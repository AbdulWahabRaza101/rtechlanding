"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const milestonesList = [
  {
    metric: "Number of Projects Completed",
    value: "69",
    prefix: "+",
  },
  {
    metric: "Happy Customers",
    value: "25",
    prefix: "+",
  },
  {
    metric: "Increased Customer Satisfaction",
    value: "97%",
    prefix: "+",
  },
  {
    metric: "Years of Experience",
    value: "3",
    prefix: "+",
  },
];

export const CounterComp = () => {
  return (
    <div
      className="h-[330px] sm:h[400px] flex flex-col items-center justify-center border-t-white border-t-[1px] border-b-white border-b-[1px]"
      style={{
        background: "linear-gradient(183.26deg, #6294BB 6.74%, #3B586E 97.35%)",
      }}
    >
      <div className="flex flex-col items-center text-center justify-center text-white max-w-[300px] px-4">
        <h1 className="text-h1 max-md:text-h3 font-[500]">Milestones</h1>
        <p className="max-md:text-[12px]">What have we achieved so far</p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-16 px-4">
        {milestonesList.map((milestone, index) => (
          <div
            key={index}
            className="text-white text-center flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-h2 mb-2 font-[500]"
            >
              {milestone.prefix}{" "}
              <CountUp
                end={parseInt(milestone.value.replace("%", ""))}
                duration={4}
                separator=","
              />
              {milestone.value.includes("%") ? "%" : ""}
            </motion.div>
            <p className="text-sm md:text-base">{milestone.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
