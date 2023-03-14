import React from "react";
import Fadeupscroll from "../../layouts/fadeupscroll";
import Image from "next/image";

export default function bodyfooter() {
  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        <div className="max-xl:hidden"></div>
        <div className="flex flex-col space-y-10 ">
          <Fadeupscroll>
            <div className="flex flex-row text-lg">
              <p className="rounded-full border border-stone-700 px-4 py-0.5">
                OUR PHILOSOPHY
              </p>
            </div>
          </Fadeupscroll>
          <Fadeupscroll>
            <p className="text-4xl md:text-5xl">
              "Allow the design process to evolve with an open mind." -Charles
              Allem{" "}
            </p>
          </Fadeupscroll>

          <Fadeupscroll>
            <p className="pt-5 text-[20px] font-semibold text-stone-400">
              ArcelDesign's philosphy reflects Allen's values of innovation and
              limitless creativity to bring together a specifically tailored and
              cohesive environment.
            </p>
          </Fadeupscroll>
        </div>

        {/* <Fadeupscroll className="flex items-center justify-center pt-10 md:pt-0"> */}
        <Fadeupscroll className="flex justify-center pt-10 md:pt-28">
          <Image
            width={200}
            height={200}
            className="rounded-full md:absolute"
            src={"/assets/about/about-avatar.jpeg"}
            alt={"about 1"}
          />
        </Fadeupscroll>
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
    </div>
  );
}
