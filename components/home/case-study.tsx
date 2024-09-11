"use client";

import Image from "next/image";

const portflioCards = [
  {
    img: "/assets/home/portfolio/web.svg",
    category: "Development",
    title: "Web Development",
  },
  {
    img: "/assets/home/portfolio/web.svg",
    category: "Design",
    title: "UI UX Designing",
  },
  {
    img: "/assets/home/portfolio/web.svg",
    category: "Development",
    title: "Mobile App Development",
  },
  {
    img: "/assets/home/portfolio/web.svg",
    category: "Design",
    title: "Graphic Designing",
  },
];

export function CaseStudyComp() {
  return (
    <>
      <section className="w-full flex flex-col items-center gap-20 py-20 bg-[url('/assets/home/case-study/bg.svg')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-center text-center justify-center text-white min-w-[300px] max-w-[600px]">
          <p className="max-md:text-[12px]">Case studies</p>
          <h1 className="text-h1 max-md:text-h3 leading-[52px] font-[500]">
            Our works describe why we are the best in the business
          </h1>
        </div>
        <div className="flex items-center justify-center gap-14 flex-wrap">
          {portflioCards?.map((portflio) => {
            return (
              <>
                <div
                  key={portflio.title}
                  className="flex flex-col items-start gap-2 text-white"
                >
                  <Image
                    src={portflio.img}
                    alt={portflio.title}
                    width={400}
                    height={500}
                    className="object-cover rounded-[14px]"
                  />
                  <h1 className="ps-3">{portflio.category}</h1>
                  <h1 className="text-h3 ps-3 leading-[24px]">
                    {portflio.title}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
