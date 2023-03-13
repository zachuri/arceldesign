import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const links1 = [
  { href: "/", name: "HOME" },
  { href: "/about", name: "ABOUT" },
  { href: "/contact", name: "CONTACT" },
];

const links2 = [
  { href: "/", name: "FACEBOOK" },
  { href: "/about", name: "LINKEDIN" },
  { href: "/contact", name: "INSTAGRAM" },
];

const Contact = () => (
  <>
    {/* ===========================================================================*/}
    {/* Contact Footer Page*/}
    {/* ===========================================================================*/}
    <div className="h-full w-full bg-zinc-900 pb-14 text-white">
      <div className="mx-5 pt-20 md:mx-20 md:pt-10">
        {/* Title / Contact Button  */}
        <div className="mb-10 grid grid-rows-2 text-lg md:mb-0 md:grid-cols-2">
          <p className="text-stone-400">CHECK OUR SOCIAL MEDIA </p>
          <div className="relative flex">
            <div
              className="absolute mt-2.5 flex flex-row-reverse rounded-full border border-white py-0.5 pr-5 pl-6 transition
            delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 md:right-0 md:mt-0
            
            
            "
            >
              <IoIosArrowRoundForward className="ml-2.5" size="25" />
              <p>CONTACT NOW</p>
            </div>
          </div>
        </div>

        {/* LINE */}
        <div className="border-b-1 flex-grow border-t-2 border-stone-800 pb-10 " />

        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          <div className="max-xl:hidden"></div>
          <div className="flex flex-col space-y-10 ">
            <div className="flex flex-row text-lg">
              <p className="rounded-full border border-stone-700 px-4 py-0.5">
                OUR PHILOSOPHY
              </p>
            </div>

            <p className="text-4xl md:text-5xl">
              "Allow the design process to evolve with an open mind." -Charles
              Allem{" "}
            </p>

            <p className="pt-5 text-[20px] font-semibold text-stone-400">
              ArcelDesign's philosphy reflects Allen's values of innovation and
              limitless creativity to bring together a specifically tailored and
              cohesive environment.
            </p>
          </div>
          <div className="flex items-center justify-center pt-10 md:pt-0">
            <Image
              width={200}
              height={200}
              className="rounded-full md:absolute"
              src={"/assets/about/1570475856866.jpeg"}
              alt={"about 1"}
            />
          </div>
        </div>

        <div className="group relative w-fit pt-5 text-xl md:pt-0">
          <span>
            <div className="full mt-10 flex flex-row space-x-2">
              <div className="mt-1.5 h-3.5 w-3.5 rounded-full bg-white"></div>
              <div className="font-bold">MORE PROJECTS </div>
            </div>
          </span>
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-700 group-hover:w-full"></span>
        </div>

        {/* LINE */}
        <div className="border-b-1 mt-5 flex-grow border-t-2 border-stone-800 " />

        <div className="mt-10 flex flex-col space-y-10 md:flex-row md:space-y-0">
          <p className="flex-auto text-stone-400">ARCELDESIGN, INC.</p>

          <div className="flex-auto">
            {links2.map((link) => (
              <div key={link.name}>
                <Link href={link.href}>
                  <button>{link.name}</button>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex-auto">
            {links1.map((link) => (
              <div key={link.name}>
                <Link href={link.href}>
                  <button>{link.name}</button>
                </Link>
              </div>
            ))}
          </div>

          <p className="text-stone-400">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
