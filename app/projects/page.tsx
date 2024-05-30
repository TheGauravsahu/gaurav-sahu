"use client";

import React from "react";

import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/utils/constant";
import Image from "next/image";

const Projects = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
    window.open(e.target.href, "_blank");
  };
  return (
    <div id="projects" className="my-20 relative  z-50">
      <h1 className="flex gap-6 items-center text-2xl">
        <div className="w-6 h-[2px] bg-white fill-white"></div>What I do
      </h1>
      <h1 className="flex gap-2 items-center text-6xl lg:ml-12 mb-12 lg:mb-0">
        Projects{" "}
        <Image
          src="/3d-computer.png"
          alt="3d-computer.png"
          width={80}
          height={80}
          className="-rotate-[15deg]"
        />
      </h1>

      <div className="flex flex-wrap gap-[60px] justify-around w-full mt-7">
        {projects.map((item: any, index) => (
          <div
            onClick={() => {
              window.open(item.url, "_blank");
            }}
            key={index}
            className="h-[30rem] w-[30rem] flex items-center justify-center "
          >
            <PinContainer title="Visit">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 lg:w-[35rem] w-[25rem] h-[30rem]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="object-cover flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
                />

                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {item.name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{item.description}.</span>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
