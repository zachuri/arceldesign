import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Image from "next/image";

const MastHead = () => {
  return (
    <>
      <div className="mx-5 mt-[100px] md:mx-20 md:mt-[250px]">
        {/* ===========================================================================*/}
        {/* Main Page */}
        {/* ===========================================================================*/}
        <div className="flex flex-col justify-center text-white xl:flex xl:flex-row">
          {/* ====  left ====*/}
          <div className="">
            <div className="ml-2 mb-5 text-[10]">
              <div>Corporate Design</div>
              <div>2014</div>
            </div>
            <div className="mx-5 text-5xl md:mx-0 md:text-7xl">
              NOVA WORLD, INC
            </div>
            <div className="relative flex xl:mt-16">
              <IoIosArrowDropright
                className="invisible xl:visible "
                size="120"
              ></IoIosArrowDropright>
              <div className="absolute right-0 bottom-0 flex flex-col max-sm:pb-10">
                <div className="font-bold">Location</div>
                <div className="font-extralight">San Dimas, California</div>
              </div>
            </div>
          </div>

          {/* ==== right ====*/}
          <div className="flex flex-col items-center justify-center md:pt-10 xl:ml-[100px]">
            <Image
              height={600}
              width={600}
              src={"/assets/dental/dental1/IMG_6566.jpg"}
              alt={"dental 1"}
            />
          </div>
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
    </>
  );
};

export default MastHead;
