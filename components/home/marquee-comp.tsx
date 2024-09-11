"use client";
import React from "react";
import { InteractiveMarquee } from "../ui/marquee";
import Image from "next/image";

export const MarqueeComp = () => {
  const logos = [
    "/assets/home/marquee-logos/microsoft.svg",
    "/assets/home/marquee-logos/feastdive.svg",
    "/assets/home/marquee-logos/organic-beau.svg",
    "/assets/home/marquee-logos/touristo.svg",
    "/assets/home/marquee-logos/blue-logo.svg",
    "/assets/home/marquee-logos/microsoft.svg",
    "/assets/home/marquee-logos/feastdive.svg",
    "/assets/home/marquee-logos/organic-beau.svg",
    "/assets/home/marquee-logos/touristo.svg",
    "/assets/home/marquee-logos/blue-logo.svg",
    "/assets/home/marquee-logos/microsoft.svg",
    "/assets/home/marquee-logos/feastdive.svg",
    "/assets/home/marquee-logos/organic-beau.svg",
    "/assets/home/marquee-logos/touristo.svg",
    "/assets/home/marquee-logos/blue-logo.svg",
    "/assets/home/marquee-logos/microsoft.svg",
    "/assets/home/marquee-logos/feastdive.svg",
    "/assets/home/marquee-logos/organic-beau.svg",
    "/assets/home/marquee-logos/touristo.svg",
    "/assets/home/marquee-logos/blue-logo.svg",
  ];

  return (
    <div
      className="flex flex-col items-center justify-center h-auto py-8 text-white"
      style={{
        background:
          "linear-gradient(293.15deg, #161C2D 84.44%, #35B44C 118.27%)",
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-h1 leading-[48px]">
          We’re the trusted partner for big names
        </h1>
        <h1 className="text-h1 leading-[48px]">
          Discover the difference our expertise makes.
        </h1>

        <p className="mt-2">
          Trusted by industry leaders and innovators worldwide for exceptional
          quality and service.
        </p>
      </div>
      <div className="w-full overflow-hidden mt-8 h-[300px] flex flex-row items-center justify-center">
        <InteractiveMarquee>
          <div className="flex gap-32 items-center">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                width={120}
                height={120}
                alt={`logo-${index}`}
                className="h-[120px] w-[120px] object-cover"
              />
            ))}
          </div>
        </InteractiveMarquee>
      </div>
    </div>
  );
};
