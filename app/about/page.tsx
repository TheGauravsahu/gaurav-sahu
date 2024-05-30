import React from "react";
import Image from "next/image";
import Img from "@/public/gsahu2.png";

const About = () => {
  return (
    <div id="about" className="my-20">
      <h1 className="flex gap-2 items-center text-6xl lg:ml-12 mb-12 lg:mb-0">
        About Me{" "}
        <Image
          src="https://asynchronousjavascriptor.github.io/pflo/images/msgLogo0001.png"
          alt="aboutPage"
          width={60}
          height={60}
        />
      </h1>

      <div className="flex flex-col lg:flex-row h-full items-center justify-center">
        <div className="lg:h-screen  lg:pt-16">
          <h2 className="text-6xl font-semibold">
            <i>hey there I&apos;m</i>
          </h2>
          <h1 className="text-8xl font-semibold">Gaurav Sahu</h1>
          <p className="opacity-80 mt-7 max-w-md text-lg">
            I am a Designer/Developer from Bihar, India. I love to create great
            website user experiences & website designs.
          </p>
        </div>
        <div className="h-screen w-full lg:w-1/2 relative lg:overflow-hidden">
          <div className="bg-[#FFBDBC] lg:w-[60%] h-[70%] relative overflow-hidden z-10  rounded-lg top-[65%] left-1/2  -translate-x-[50%] -translate-y-[50%]"></div>
          <Image
            src={Img}
            alt="Gauarv Sahu"
            width={800}
            height={800}
            className="absolute w-full h-full z-[99] object-cover top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
