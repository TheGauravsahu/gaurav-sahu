"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import Image from "next/image";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const key = process.env.FORM_KEY;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "1ff6ae6e-02d3-4238-8d9b-ad5072650a8d");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="mt-32">
      <h1 className="flex gap-2 items-center text-6xl ml-12 mb-12 lg:mb-0">
        Conatct{" "}
        <Image
          src="/3d-phone.png"
          alt="3d-phone.png"
          width={80}
          height={80}
          className="-rotate-[15deg]"
        />
      </h1>
      <div className="max-w-md rounded-md lg:w-full w-[80%] mx-auto  md:rounded-2xl p-4 md:p-8 shadow-input bg-black-200 lg:mt-10 mt-16 border-white/[0.2] border">
        <h2 className="font-bold text-xl text-neutral-200">Gaurav sahu</h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300">
          You can contact me
        </p>

        <form className="my-8" onSubmit={onSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="lastname">Name</Label>
              <Input
                id="lastname"
                placeholder="Name"
                type="text"
                name="name"
                required
                className="bg-black-100"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4 ">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="Enter your E-mail"
              type="email"
              name="email"
              required
              className="bg-black-100"
            />
          </LabelInputContainer>
          <textarea
            name="meesage"
            id="message"
            placeholder="Enter your message here"
            className="flex w-full  border-white/[0.2] border text-white bg-black-100 shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-40 h-[100px]"
          ></textarea>
          <button
            className="bg-gradient-to-br relative group/btn mt-4 from-black-100 to-black-100 block bg-black-100 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>
        </form>

        <h1 className="text-white text-lg font-semibold">{result}</h1>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
