"use client";
import React from "react";
import { motion } from "framer-motion";

export const ServiceComp = () => {
  return (
    <div>
      <h1>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-h1"
        >
          This would be service
        </motion.span>
      </h1>
    </div>
  );
};
