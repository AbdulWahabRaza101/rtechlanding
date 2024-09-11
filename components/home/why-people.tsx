"use client";

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [startSlide, setStartSlide] = useState(0);
  return (
    <>
      <section className="w-full relative flex flex-col items-center gap-20 py-20 bg-white">
        <div className="flex flex-col items-center text-center justify-center text-black min-w-[300px] max-w-[600px]">
          <h1 className="text-h1 max-md:text-h3 font-[500]">
            What people say about us
          </h1>
          <p className="max-md:text-[12px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-between gap-14 flex-wrap">
            {cards?.slice(startSlide, startSlide + 3).map((card) => {
              return (
                <>
                  <div
                    key={card.name}
                    className="flex flex-col items-start gap-2 text-black w-[450px] h-[400px] border-gray-700 border-[1px] rounded-[14px] p-7"
                  >
                    <div className="flex flex-row items-start gap-2">
                      <Image
                        src={card.img}
                        alt={card.name}
                        width={70}
                        height={70}
                        className="object-cover rounded-[14px] w-[70px] h-[70px]"
                      />
                      <div className="flex flex-col gap-1">
                        <h1>{card.name}</h1>
                        <p>{card.type}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {Array.from(
                            { length: card.rating },
                            (_, i) => i + 1
                          )?.map((val) => {
                            return (
                              <Image
                                src="/assets/icons/star.svg"
                                width={14}
                                height={14}
                                alt="rating"
                                className="object-cover"
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <p className="my-4">{card.desc}</p>
                  </div>
                </>
              );
            })}
          </div>
          <ArrowLeft className="w-8 h-8 absolute left-[15px] cursor-pointer" />
          <ArrowRight className="w-8 h-8 absolute right-[15px] cursor-pointer" />
        </div>
      </section>
    </>
  );
}
