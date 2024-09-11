"use client";
import React from "react";
import { motion } from "framer-motion";

export const ServiceComp = () => {
  return (
    <div className="bg-[url('/assets/service-bg.svg')] bg-cover bg-center h-screen flex justify-center">
      <div className="mt-3">
        <h1>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-h1 text-white font-secondary"
          >
            Services we offer for you
          </motion.span>
        </h1>
      </div>
    </div>
  );
};
