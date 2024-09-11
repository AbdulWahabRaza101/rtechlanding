import { CounterComp } from "@/components/home/counter-comp";
import { HeroComp } from "@/components/home/hero-comp";
import { ServiceComp } from "@/components/home/service-comp";
import React from "react";
const Page = () => {
  return (
    <>
      <main>
        <HeroComp />
        <CounterComp />
        <ServiceComp />
      </main>
    </>
  );
};

export default Page;
