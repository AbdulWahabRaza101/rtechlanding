"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    img: "/assets/home/why-people/profile1.svg",
    name: "Isabella Chavez",
    type: "Developer",
    rating: 5,
    desc: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
  },
  {
    img: "/assets/home/why-people/profile2.svg",
    name: "Isabella Chavez",
    type: "Developer",
    rating: 5,
    desc: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
  },
  {
    img: "/assets/home/why-people/profile3.svg",
    name: "Isabella Chavez",
    type: "Developer",
    rating: 5,
    desc: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
  },
  {
    img: "/assets/home/why-people/profile1.svg",
    name: "Isabella Chavez",
    type: "Developer",
    rating: 5,
    desc: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
  },
  {
    img: "/assets/home/why-people/profile2.svg",
    name: "Isabella Chavez",
    type: "Developer",
    rating: 5,
    desc: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
  },
  {
    img: "/assets/home/why-people/profile3.svg",
    name: "Isabella Chavez",
    type: "Developer",
    rating: 5,
    desc: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”",
  },
];

export function WhyPeopleComp() {
  const [startSlide, setStartSlide] = useState(0); // State to control visible slide range
  const visibleCards = 3; // Number of visible cards

  const handlePrevSlide = () => {
    setStartSlide((prev) =>
      prev - visibleCards < 0
        ? cards.length - visibleCards
        : prev - visibleCards
    );
  };

  const handleNextSlide = () => {
    setStartSlide((prev) =>
      prev + visibleCards >= cards.length ? 0 : prev + visibleCards
    );
  };

  return (
    <section className="w-full relative flex flex-col items-center gap-20 py-20 bg-white">
      <div className="flex flex-col items-center text-center justify-center text-black min-w-[300px] max-w-[600px]">
        <h1 className="text-h1 max-md:text-h3 font-medium">
          What people say about us
        </h1>
        <p className="max-md:text-sm">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>

      <div className="relative flex items-center w-full">
        <div className="w-full overflow-hidden mx-32">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startSlide * (100 / visibleCards)}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100%/3)] p-4 box-border"
              >
                <div className="h-[400px] border border-gray-300 rounded-lg p-6">
                  <div className="flex items-start gap-2">
                    <Image
                      src={card.img}
                      alt={card.name}
                      width={70}
                      height={70}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold">{card.name}</h1>
                      <p className="text-sm text-gray-600">{card.type}</p>
                      <div className="flex mt-2">
                        {Array.from({ length: card.rating }, (_, i) => (
                          <Image
                            key={i}
                            src="/assets/icons/star.svg"
                            width={14}
                            height={14}
                            alt="rating"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <ArrowLeft
          className="w-8 h-8 absolute left-[12px] top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handlePrevSlide}
        />

        {/* Right Arrow */}
        <ArrowRight
          className="w-8 h-8 absolute right-[12px] top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleNextSlide}
        />
      </div>
    </section>
  );
}
