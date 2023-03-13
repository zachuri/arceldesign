import React from "react";
import SliderImage from "./slider-image";
import Link from "next/link";
import Fadeup from "../layouts/fadeup";
import Fadeupscroll from "../layouts/fadeupscroll";
import Line from "../layouts/line";

interface Props {
  index: number;
  designDesc: {
    title: string;
    desc: string;
  };
  designInfo: {
    name: string;
    type: string;
    client: string;
    size: string;
    location: string;
    completedYear: string;
  };
  images: { src: string; alt: string; desc: string }[];
}

const AboutDesign: React.FC<Props> = ({
  index,
  designDesc,
  designInfo,
  images,
}) => {
  return (
    <>
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
                <div className="font-light">
                  Collection {index < 10 ? "0" + index : index}
                </div>
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
            <Fadeupscroll>
              <div className="mt-20">
                <div className="text-2xl font-bold md:text-5xl">
                  {designDesc.title}
                </div>
                <div className="mt-10 text-xl font-medium">
                  {designDesc.desc}
                </div>
              </div>
            </Fadeupscroll>
          </div>
          <div
            id="gallery"
            className="md:flex md:flex-col md:items-center md:justify-center"
          >
            <div className="mt-10 md:mt-20 md:w-[750px]">
              <SliderImage images={images} />
            </div>
          </div>

          {/* Design Table Information */}
          <Fadeupscroll>
            <p className="mt-20 text-xl font-extrabold">DESIGN INFORMATION</p>
            <div className="border-b-1 mt-5 flex-grow border-t-2 border-black"></div>

            <div className="mt-10 w-full  border-separate border-spacing-y-6 space-y-4 text-xl">
              <div className="grid md:grid-cols-2">
                <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                  CLIENT
                </p>
                <p className=" border-b-2 border-dotted pb-4 font-bold">
                  {designInfo.client}
                </p>
              </div>
              <div className="grid md:grid-cols-2">
                <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                  TOTAL SIZE
                </p>
                <p className=" border-b-2 border-dotted pb-4 font-bold">
                  {designInfo.size}
                </p>
              </div>
              <div className="grid md:grid-cols-2">
                <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                  Location
                </p>
                <p className=" border-b-2 border-dotted pb-4 font-bold">
                  {designInfo.location}
                </p>
              </div>
              <div className="grid md:grid-cols-2">
                <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                  Production Completed{" "}
                </p>
                <p className=" border-b-2 border-dotted pb-4 font-bold">
                  {designInfo.completedYear}
                </p>
              </div>
              <div className="grid md:grid-cols-2">
                <p className="border-dotted font-light text-stone-700 md:border-b-2 md:pb-4">
                  Design Type
                </p>
                <p className=" border-b-2 border-dotted pb-4 font-bold">
                  {designInfo.type}
                </p>
              </div>
            </div>
          </Fadeupscroll>
          {/* Buttons for contact and similar projects */}
          <div className="grid md:grid-cols-2">
            <div />

            <Link
              className="group relative flex flex-row text-xl"
              href={"/contact"}
            >
              <span>
                <div className="full mt-10 flex flex-row space-x-2">
                  <div className="mt-1.5 h-3.5 w-3.5 rounded-full bg-black"></div>
                  <div className="font-bold">CONTACT TO CONSULT</div>
                </div>
                <p className="absolute right-0 bottom-0 mt-10 flex flex-col-reverse text-right text-sm font-extrabold">
                  02
                </p>
              </span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="border-b-1 mt-5 mb-5 flex-grow border-t-2 border-black"></div>

          <Link
            className="group relative flex flex-row text-xl"
            href={"/projects/" + designInfo.type.toLowerCase()}
          >
            <span>
              <div className="full mt-10 flex flex-row space-x-2">
                <div className="mt-1.5 h-3.5 w-3.5 rounded-full bg-black"></div>
                <div className="font-bold">SIMILAR PROJECTS</div>
              </div>
              <p className="absolute right-0 bottom-0 mt-10 flex flex-col-reverse text-right text-sm font-extrabold">
                03
              </p>
            </span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
          </Link>

          <Line />
          {/* <div className="border-b-1 mt-5 flex-grow border-t-2 border-black "></div> */}
        </div>
      </div>
    </>
  );
};

export default AboutDesign;
