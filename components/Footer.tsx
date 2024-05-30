import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[10rem] w-full dark:bg-black-100 z-0  bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] relative flex items-center justify-between px-16">
      <p className="opacity-80">Created with ❤️ by Gaurav Sahu</p>
      <div className="flex gap-2 items-end">
        <Link target="_blank" href="https://github.com/TheGauravsahu">
          <FaGithub
            className="bg-[#0C1324]  rounded-lg border-[.5px] w-7 h-7 px-1 border-white border-opacity-40"
            size={20}
          />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/the_gauravsahu7/">
          <FaInstagram
            className="bg-[#0C1324]  rounded-lg border-[.5px] w-7 h-7 px-1 border-white border-opacity-40"
            size={20}
          />
        </Link>
        <Link target="_blank" href="https://x.com/the_gsahu">
          <FaTwitter
            className="bg-[#0C1324]  rounded-lg border-[.5px] w-7 h-7 px-1 border-white border-opacity-40"
            size={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
