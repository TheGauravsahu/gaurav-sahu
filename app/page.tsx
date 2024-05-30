import Hero from "@/components/Hero";
import Image from "next/image";
import Projects from "@/app/projects/page";
import About from "@/app/about/page";
import Contact from "@/app/contact/page"

export default function Home() {
  return (
    <main id="home" className="relative w-full flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">
      <div className="w-full">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
