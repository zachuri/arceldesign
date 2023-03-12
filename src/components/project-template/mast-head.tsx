import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

interface Props {
  index: number;
  designInfo: {
    name: string;
    type: string;
    location: string;
    completedYear: string;
  };
  image: string;
}

const MastHead: React.FC<Props> = ({ index, designInfo, image }) => {
  return (
    <>
      <div className="relative mx-5 flex h-screen items-center justify-center md:mx-20">
        {/* Middle */}
        <div className="flex flex-col text-white max-sm:-mt-20 xl:flex-row xl:items-center xl:justify-center xl:space-x-10">
          {/* Left */}
          <div>
            <div className="">
              <div className="mb-5 text-[10]">
                <div>{designInfo.type} Design</div>
                <div>{designInfo.completedYear}</div>
              </div>
              <div className="mx-5 text-5xl md:text-6xl">{designInfo.name}</div>
              <div className="flex justify-end max-xl:my-5 xl:mt-16 xl:justify-between">
                <IoIosArrowDropright
                  className="max-xl:hidden"
                  size="120"
                ></IoIosArrowDropright>

                <div className="flex flex-col">
                  <div className="flex-1"></div>
                  <div className="font-bold">Location</div>
                  <div className="font-extralight">{designInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center justify-center">
            <Image height={600} width={600} src={image} alt={"dental 1"} />
          </div>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-0 w-full text-white ">
          <div className="flex flex-row space-x-10">
            <div className="flex flex-row">
              Gallery
              <div className="mt-3 ml-2 w-10 border-t-2 border-gray-400"></div>
            </div>
            <Link
              className="flex flex-row"
              href={"/projects/" + designInfo.type.toLowerCase()}
            >
              Similar Projects
              <div className="mt-3 ml-2 w-10 border-t-2 border-gray-400"></div>
            </Link>

            {/* <p className="group relative m-16">
              <span>Hover over me</span>
              <span className="absolute -bottom-1 left-0 h-2 w-0 bg-blue-400 transition-all group-hover:w-full"></span>
            </p> */}
          </div>

          <div className="border-b-1 mt-5 mb-5 flex-grow border-t-2 border-white"></div>

          <div className="relative mb-10 flex text-sm">
            <div className="absoute left-0 flex flex-col">
              <div className="font-bold">{designInfo.type} Collections</div>
              <div className="font-light">
                Collection {index < 10 ? "0" + index : index}
              </div>
            </div>
            <div className="absolute right-0 flex flex-col">
              <div className="font-bold">Creative Design</div>
              <div className="font-light">{designInfo.name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MastHead;
