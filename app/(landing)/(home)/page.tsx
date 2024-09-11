import { CaseStudyComp } from "@/components/home/case-study";
import { CounterComp } from "@/components/home/counter-comp";
import { HeroComp } from "@/components/home/hero-comp";
import { ServiceComp } from "@/components/home/service-comp";
import { TeamComp } from "@/components/home/team-comp";
import { WhyChooseUsComp } from "@/components/home/why-choose-us";
import { WhyPeopleComp } from "@/components/home/why-people";
import React from "react";
const Page = () => {
  return (
    <>
      <main>
        <HeroComp />
        <CounterComp />
        <ServiceComp />
        <TeamComp />
        <CaseStudyComp />
        <WhyChooseUsComp />
        <WhyPeopleComp />
      </main>
    </>
  );
};

export default Page;
