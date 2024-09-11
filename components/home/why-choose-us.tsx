"use client";
import Image from "next/image";

const whyChoosCards = [
  {
    img: "/assets/home/why-us/manager-icon.svg",
    category: "Dedicated project manager",
    title:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    img: "/assets/home/why-us/organized-icon.svg",
    category: "Organized tasks",
    title:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    img: "/assets/home/why-us/feedback-icon.svg",
    category: "Easy feedback sharing",
    title:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    img: "/assets/home/why-us/deadline-icon.svg",
    category: "Never miss deadline",
    title:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
];

export function WhyChooseUsComp() {
  return (
    <>
      <section className="w-full flex flex-col items-center gap-20 py-20 bg-[url('/assets/home/why-us/bg.svg')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-center text-center justify-center text-white min-w-[300px] max-w-[600px]">
          <p className="max-md:text-[12px]">Case studies</p>
          <h1 className="text-h1 max-md:text-h3 leading-[52px] font-[500]">
            Our works describe why we are the best in the business
          </h1>
        </div>
        <div className="flex items-center justify-center gap-14 flex-wrap pt-4">
          {whyChoosCards?.map((whyUs) => {
            return (
              <>
                <div
                  key={whyUs.title}
                  className="flex flex-row items-start gap-2 rounded-[14px] text-white border-[1px] border-white px-4 py-4 w-[450px]"
                >
                  <Image
                    src={whyUs.img}
                    alt={whyUs.title}
                    width={72}
                    height={72}
                    className="object-cover w-[80px] h-[80px]"
                  />
                  <div className="flex flex-col items-start gap-2 ps-3">
                    <h1 className="text-h3 font-[500]">{whyUs.category}</h1>
                    <h1 className="">{whyUs.title}</h1>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
