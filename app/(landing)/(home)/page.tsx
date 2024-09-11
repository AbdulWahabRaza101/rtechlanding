import { CaseStudyComp } from "@/components/home/case-study";
import { CounterComp } from "@/components/home/counter-comp";
import { HeroComp } from "@/components/home/hero-comp";
import { ServiceComp } from "@/components/home/service-comp";
import { TeamComp } from "@/components/home/team-comp";
import React from "react";
const Page = () => {
  return (
    <>
      <main>
        <HeroComp />
        <ServiceComp />
        <CounterComp />
        <TeamComp />
        <CaseStudyComp />
      </main>
    </>
  );
};

export default Page;
