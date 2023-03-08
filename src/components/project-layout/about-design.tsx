import React from "react";
import Image from "next/image";

const AboutDesign = () => {
  return (
    <>
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
            <div className="mt-20">
              <div className="text-2xl font-bold md:text-5xl">
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
    </>
  );
};

export default AboutDesign;
