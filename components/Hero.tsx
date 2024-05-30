import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-20 w-full overflow-hidden">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-40 h-screen fill-blue" />
      </div>

      <div className="flex flex-col justify-center my-20 z-10 items-center w-full">
        <h1 className="text-3xl mb-2">&lt;/&gt; Code </h1>
        <div className="max-w-[80vh] lg:w-full flex flex-col justify-center items-center mx-auto">
          <h2 className="text-center uppercase tracking-widest text-blue-100 max-w-80 lg:ml-3">
            My name is Gaurav Sahu
          </h2>
          <div className="w-full lg:text-right mt-4 lg:mt-0">
            <h1 className="text-6xl font-semibold text-center">
              I love to create
            </h1>
            <h1 className="text-6xl lg:ml-16 text-center w-full">
              <i className="text-pink-400 font-thin">&quot;flawless&quot; </i>{" "}
              website
            </h1>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <button className="bg-cyan-600 my-5 text-center font-semibold text-lg px-6 py-2 rounded-full">
            <Link
              target="_blank"
              href="https://www.instagram.com/the_gauravsahu7/"
            >
              Say Hi 👋🏻
            </Link>
          </button>

          <button className="bg-pink-400 my-5 text-center font-semibold text-lg px-6 py-2 rounded-full">
            <Link
              className="flex gap-1 items-center"
              target="_blank"
              href="https://github.com/TheGauravsahu"
            >
              <FaGithub /> See Github
            </Link>
          </button>
        </div>
      </div>

      <div className="w-full lg:flex justify-center items-center mx-auto overflow-hidden hidden">
        <Image
          className="w-[80%]"
          src="https://asynchronousjavascriptor.github.io/pflo/images/main.png"
          width={600}
          height={600}
          alt="Skills"
        />
      </div>
    </div>
  );
};

export default Hero;
