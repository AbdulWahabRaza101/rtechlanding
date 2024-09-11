"use client";

import Image from "next/image";

const teamCards = [
  {
    img: "/assets/home/team/hamza.svg",
    title: "Hamza",
  },
  {
    img: "/assets/home/team/raza.svg",
    title: "Raza",
  },
];

export function TeamComp() {
  return (
    <>
      <section className="w-full flex flex-col items-center gap-20 py-20 bg-[url('/assets/home/team/bg.svg')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-center text-center justify-center text-white min-w-[300px] max-w-[400px]">
          <h1 className="text-h1 max-md:text-h3 font-[500]">Meet our Heroes</h1>
          <p className="max-md:text-[12px]">
            The dedicated team driving innovation and excellence every day,the
            passionate experts who bring creativity and innovation to every
            project.
          </p>
        </div>
        <div className="flex items-center justify-center gap-32">
          {teamCards?.map((member, index) => {
            return (
              <>
                <Image
                  src={member.img}
                  alt={member.title}
                  key={member.title}
                  width={index === 0 ? 500 : 300}
                  height={index === 0 ? 600 : 400}
                  className="object-cover rounded-[14px]"
                />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
