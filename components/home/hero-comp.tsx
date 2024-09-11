"use client";
import React from "react";
import Navbar from "../navbar";
import { Button } from "@nextui-org/button";

export const HeroComp = () => {
  return (
    <section className="relative h-screen w-full">
      <video
        src="https://www.afiniti.com/wp-content/uploads/2024/06/home-bg.mp4"
        className="absolute object-cover z-[-1] w-full h-[100vh]"
        autoPlay
        loop
        muted
      />
      <div className="px-7">
        <Navbar />
        <div className="h-[70vh] flex flex-col justify-center ms-[10%]">
          <div className="flex flex-col items-start gap-4">
            <div className="text-white md:max-w-[50%] flex flex-col gap-4">
              <h5>Let’s shift your business</h5>
              <h1 className="text-h1 leading-[52px]">
                Are you ready to elevate your business growth to the next level?
              </h1>
              <p>
                We would convert your conventional business into Digital and
                automated business by using latest cutting edge tech stacks, an
                end- to-end web based apps development life cycle to meet each
                business’ needs.
              </p>
              <Button color="primary" size="lg" className="uppercase w-[250px]">
                GET Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
