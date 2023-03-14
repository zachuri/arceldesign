import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function title_button() {
  return (
    <div className="mb-10 grid grid-rows-2 text-lg md:mb-0 md:grid-cols-2">
      <p className="text-stone-400">CHECK OUR SOCIAL MEDIA </p>
      <div className="relative flex">
        <div
          className="absolute mt-2.5 flex flex-row-reverse rounded-full border border-white py-0.5 pr-5 pl-6 transition
            delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 md:right-0 md:mt-0"
        >
          <IoIosArrowRoundForward className="ml-2.5" size="25" />
          <p>CONTACT NOW</p>
        </div>
      </div>
    </div>
  );
}
