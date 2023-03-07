import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Keyboard, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { IoIosArrowDropright, IoIosArrowRoundForward } from "react-icons/io";

import Image from "next/image";

const COPLH = () => {
  return (
    <main>
      <div className="mx-5 mt-[250px] md:mx-20">
        {/* ===========================================================================*/}
        {/* Main Page */}
        {/* ===========================================================================*/}
        <div className=" flex flex-col text-white md:grid md:grid-cols-2">
          {/* ====  left ====*/}
          <div className="relative">
            <div className="ml-2 mb-5 text-[10]">
              <div>Corporate Design</div>
              <div>2014</div>
            </div>
            <div className="mx-5 text-7xl  md:mx-0 md:text-9xl">
              NOVA WORLD, INC
            </div>
            <div className="relative -mt-14 flex md:mt-16">
              <IoIosArrowDropright
                className="invisible md:visible "
                size="120"
              ></IoIosArrowDropright>
              <div className="absolute right-0 bottom-0 flex flex-col">
                <div className="font-bold">Location</div>
                <div className="font-extralight">San Dimas, California</div>
              </div>
            </div>
          </div>
          {/* ==== right ====*/}
          <img
            className="mt-5 object-fill md:mt-0 md:ml-20"
            src={"/assets/dental/dental1/IMG_6566.jpg"}
            alt={"dental 1"}
          />
        </div>

        {/* ==== bottom ===*/}
        <div className="mt-10 text-white ">
          <div className="flex flex-row space-x-10">
            <div className="flex flex-row">
              Gallery
              <div className="mt-3 ml-2 w-10 border-t-2 border-gray-400"></div>
            </div>
            <div className="flex flex-row">
              Similar Projects
              <div className="mt-3 ml-2 w-10 border-t-2 border-gray-400"></div>
            </div>
          </div>

          <div className="border-b-1 mt-5 mb-5 flex-grow border-t-2 border-white"></div>

          <div className="relative mb-10 flex text-sm">
            <div className="absoute left-0 flex flex-col">
              <div className="font-bold">Corporate Collections</div>
              <div className="font-light">Collection 01</div>
            </div>
            <div className="absolute right-0 flex flex-col">
              <div className="font-bold">Creative Design</div>
              <div className="font-light">Nova World, Inc</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===========================================================================*/}
      {/* About Design */}
      {/* ===========================================================================*/}
      <div className="bg-white">
        <div className="mx-5 pt-10 pb-12 md:mx-20">
          <div className="grid grid-rows-2 md:grid-cols-2">
            <div className="flex flex-row space-x-1">
              <div className="mt-1.5 h-3.5 w-3.5 rounded-full bg-black"></div>
              <div className="text-xl font-bold">ABOUT DESIGN</div>
            </div>
            <div className="relative">
              <div className="flex flex-col text-sm">
                <div className="font-bold">Corporate Collections</div>
                <div className="font-light">Collection 01</div>
              </div>
              <div className="absolute right-0 bottom-0  text-right text-sm font-extrabold">
                <p>01</p>
              </div>
            </div>
          </div>
          <div className="border-b-1 my-5 flex-grow border-t-2 border-black md:-my-5"></div>

          <div className="grid md:grid-cols-2">
            <div className="left-0 mt-10 flex flex-col text-sm">
              <div className="font-bold"> DESCRIPTION</div>
              <div className="font-light">ABOUT COLLECTIONS </div>
            </div>
            <div className="mt-[150px]">
              <div className=" text-2xl font-bold md:text-[50px]">
                HARMONIOUS PALETTE
              </div>
              <div className="mt-10 text-xl font-medium">
                Bringing natural soothing elements to set a harmonious tone. By
                combining natural elements, and warm colors to the design, where
                the space is large and oversized, a tranquil setting begins to
                develop.
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-20">
            <Image
              width={1920}
              height={1080}
              className="w-full object-cover md:h-[750px]"
              src={"/assets/dental/dental1/IMG_6567.jpg"}
              alt={"dental 1"}
            />
          </div>

          {/* Design Table Information */}
          <p className="mt-20 text-xl font-extrabold">DESIGN INFORMATION</p>
          <div className="border-b-1 mt-5 flex-grow border-t-2 border-black"></div>

          <div className="mt-10 w-full  border-separate border-spacing-y-6 space-y-4 text-xl">
            <div className="grid md:grid-cols-2">
              <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                CLIENT
              </p>
              <p className=" border-b-2 border-dotted pb-4 font-bold">
                Jenny Zhao & Rod Smith
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                TOTAL SIZE
              </p>
              <p className=" border-b-2 border-dotted pb-4 font-bold">
                10,000 sq ft
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                Location
              </p>
              <p className=" border-b-2 border-dotted pb-4 font-bold">
                San Dimas, CA
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                Production Completed{" "}
              </p>
              <p className=" border-b-2 border-dotted pb-4 font-bold">2014</p>
            </div>
            <div className="grid md:grid-cols-2">
              <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                Design Type
              </p>
              <p className=" border-b-2 border-dotted pb-4 font-bold">
                Corporate
              </p>
            </div>
          </div>

          {/* Buttons for contact and similar projects */}
          <div className="grid md:grid-cols-2">
            <div />
            <div className="relative flex text-xl">
              <div className="full mt-10 flex flex-row space-x-2">
                <div className="mt-1.5 h-3.5 w-3.5 rounded-full bg-black"></div>
                <div className="font-bold">CONTACT TO CONSULT</div>
              </div>
              <p className="absolute right-0 bottom-0 mt-10 flex flex-col-reverse text-right text-sm font-extrabold">
                02
              </p>
            </div>
          </div>
          <div className="border-b-1 mt-5 mb-5 flex-grow border-t-2 border-black"></div>

          <div className="relative flex text-xl">
            <div className="full mt-10 flex flex-row space-x-2">
              <div className="mt-1.5 h-3.5 w-3.5 rounded-full bg-black"></div>
              <div className="font-bold">MORE PROJECTS </div>
            </div>
            <p className="absolute right-0 bottom-0 mt-10 flex flex-col-reverse text-right text-sm font-extrabold">
              03
            </p>
          </div>

          <div className="border-b-1 mt-5 flex-grow border-t-2 border-black "></div>
        </div>
      </div>

      {/* ===========================================================================*/}
      {/* Contact Footer Page*/}
      {/* ===========================================================================*/}
      <div className="h-full w-full bg-zinc-900 pb-14 text-white">
        <div className="mx-5 pt-20 md:mx-20 md:pt-10">
          {/* Title / Contact Button  */}
          <div className="mb-10 grid grid-rows-2 text-lg md:mb-0 md:grid-cols-2">
            <p className="text-stone-400">CHECK OUR SOCIAL MEDIA </p>
            <div className="relative flex">
              <div className="absolute mt-2.5 flex flex-row-reverse rounded-full border border-white py-0.5 pr-5 pl-6 md:right-0 md:mt-0">
                <IoIosArrowRoundForward className="ml-2.5" size="25" />
                <p>CONTACT NOW</p>
              </div>
            </div>
          </div>

          {/* LINE */}
          <div className="border-b-1 flex-grow border-t-2 border-stone-800 " />

          <div className="grid grid-cols-2 pt-20 md:pl-[500px]">
            <div className="-mr-40 flex flex-col space-y-10">
              <div className="flex flex-row text-lg">
                <p className="rounded-full border border-stone-700 px-4 py-0.5">
                  OUR PHILOSOPHY
                </p>
              </div>
              <p className="text-3xl md:text-7xl">
                "Allow the design process to evolve with an open mind." -Charles
                Allem{" "}
              </p>
              <p className="pt-5 text-[20px] font-semibold text-stone-400">
                ArcelDesign's philosphy reflects Allen's values of innovation
                and limitless creativity to bring together a specifically
                tailored and cohesive environment.
              </p>
            </div>
            <div className="relative md:ml-40">
              <Image
                width={300}
                height={300}
                className="rounded-full md:absolute md:right-0 md:bottom-10 md:mr-20"
                src={"/assets/about/1570475856866.jpeg"}
                alt={"about 1"}
              />
            </div>
          </div>

          <div className="relative flex text-xl">
            <div className="full mt-10 flex flex-row space-x-2">
              <div className="mt-1.5 h-3.5 w-3.5 rounded-full bg-white"></div>
              <div className="font-bold">MORE PROJECTS </div>
            </div>
            <p className="absolute right-0 bottom-0 mt-10 flex flex-col-reverse text-right text-sm font-extrabold">
              03
            </p>
          </div>

          {/* LINE */}
          <div className="border-b-1 mt-5 flex-grow border-t-2 border-stone-800 " />

          <div className="mt-10 flex flex-col md:flex-row">
            <p className="flex-auto text-stone-400">ARCELDESIGN, INC.</p>
            <div className="flex-auto">
              <ul>
                <li>FACEBOOK</li>
                <li>LINKEDIN</li>
                <li>INSTAGRAM</li>
              </ul>
            </div>
            <div className="flex-auto">
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <p className="text-stone-400">©2022 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default COPLH;
