import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import Fadeup from "../layouts/fadeup";
import { BlurhashCanvas } from "react-blurhash";
import useNextBlurhash from "use-next-blurhash";

interface Props {
  index: number;
  designInfo: {
    name: string;
    type: string;
    location: string;
    completedYear: string;
  };
  imagePath: string;
  imageHash: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const MastHead: React.FC<Props> = ({
  index,
  designInfo,
  imagePath,
  imageHash,
}) => {
  const [blurDataUrl] = useNextBlurhash(imageHash);

  return (
    <>
      <div className="relative mx-5 flex flex-col items-center justify-center max-md:mt-10 max-md:pt-[135px] md:mx-20 md:h-screen">
        {/* Middle */}
        <div className="flex flex-col text-white max-sm:-mt-20 xl:flex-row xl:items-center xl:justify-center xl:space-x-10">
          {/* Left */}
          <div>
            <div className="">
              <div className="mb-5 text-[10]">
                <p className="capitalize">{designInfo.type} Design</p>
                <p>{designInfo.completedYear}</p>
              </div>
              <div className="mx-5 text-5xl uppercase md:text-6xl">
                {designInfo.name}
              </div>
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
          {/* initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} */}
          {/* Right */}
          <div>
            <Fadeup>
              <div className="relative">
                <Image
                  alt={designInfo.name}
                  src={imagePath}
                  width={750}
                  height={500}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                />
              </div>
            </Fadeup>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full text-white max-md:mt-10 md:absolute md:bottom-0">
          <div className="flex flex-row space-x-10">
            <a
              className="group relative flex flex-row scroll-smooth"
              href="#gallery"
            >
              <span className="flex flex-row">
                Gallery
                <div className="mt-3 ml-2 w-10 border-t-2 border-gray-400"></div>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>

            <Link
              className="group relative flex flex-row"
              href={"/projects/" + designInfo.type.toLowerCase()}
            >
              <span className="flex flex-row">
                Similar Projects
                <div className="mt-3 ml-2 w-10 border-t-2 border-gray-400"></div>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>

          <div className="border-b-1 mt-5 mb-5 flex-grow border-t-2 border-white">
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </div>

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
