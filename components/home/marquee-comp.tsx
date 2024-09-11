"use client";
import React from "react";
import { InteractiveMarquee } from "../ui/marquee";

export const MarqueeComp = () => {
  const logos = [
    "/assets/home/marquee-logos/microsoft.svg",
    "/assets/home/marquee-logos/feastdive.svg",
    "/assets/home/marquee-logos/organic-beau.svg",
    "/assets/home/marquee-logos/touristo.svg",
    "/assets/home/marquee-logos/blue-logo.svg",
  ];

  return (
    <div
      className="flex flex-col items-center justify-center h-auto py-8"
      style={{
        background:
          "linear-gradient(293.15deg, #161C2D 84.44%, #35B44C 118.27%)",
      }}
    >
      <h1 className="text-white text-4xl lg:text-5xl font-bold text-center">
        We’re the trusted partner for big names
      </h1>
      <h1 className="text-white text-4xl lg:text-5xl font-bold text-center mt-2">
        Discover the difference our expertise makes.
      </h1>

      <p className="text-neutral-400 font-secondary text-lg lg:text-xl text-center mt-4">
        Trusted by industry leaders and innovators worldwide for exceptional
        quality and service.
      </p>

      <div className="w-full overflow-hidden mt-8">
        <InteractiveMarquee>
          <div className="flex space-x-16 items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-20 w-auto" // Tailwind for logo size
              />
            ))}
          </div>
        </InteractiveMarquee>
      </div>
    </div>
  );
};
