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
      className="h-[330px] flex flex-col items-center mt-1"
      style={{
        background: "linear-gradient(to bottom, #6294BB 20%, #3B586E 90%)",
      }}
    >
      <div className="mt-3">
        <h1>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-h1 text-white tracking-widest font-secondary"
          >
            MILESTONES
          </motion.span>
        </h1>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-11">
        {milestonesList.map((milestone, index) => (
          <div
            key={index}
            className="text-white text-center flex flex-col items-center font-secondary"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-4xl font-bold mb-2"
            >
              {milestone.prefix}{" "}
              <CountUp
                end={parseInt(milestone.value.replace("%", ""))}
                duration={2}
                separator=","
              />
              {milestone.value.includes("%") ? "%" : ""}
            </motion.div>
            <div className="text-lg">{milestone.metric}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
