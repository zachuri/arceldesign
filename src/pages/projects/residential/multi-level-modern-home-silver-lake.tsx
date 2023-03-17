import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/residential/r3-1.jpg",
    alt: "residential r3 1",
    desc: "",
  },
  {
    src: "/assets/residential/r3-2.jpg",
    alt: "residential r3 2",
    desc: "",
  },
  {
    src: "/assets/residential/r3-3.jpg",
    alt: "residential r3 3",
    desc: "",
  },
  {
    src: "/assets/residential/r3-4.jpg",
    alt: "residential r3 4",
    desc: "",
  },
  {
    src: "/assets/residential/r3-5.png",
    alt: "residential r3 5",
    desc: "",
  },
  {
    src: "/assets/residential/r3-6.png",
    alt: "residential r3 6",
    desc: "",
  },
  {
    src: "/assets/residential/r3-7.png",
    alt: "residential r3 7",
    desc: "",
  },
  {
    src: "/assets/residential/r3-8.jpg",
    alt: "residential r3 8",
    desc: "",
  },
  {
    src: "/assets/residential/r3-9.jpg",
    alt: "residential r3 9",
    desc: "",
  },
  {
    src: "/assets/residential/r3-10.jpg",
    alt: "residential r3 10",
    desc: "",
  },
  {
    src: "/assets/residential/r3-11.jpg",
    alt: "residential r3 11",
    desc: "",
  },
  {
    src: "/assets/residential/r3-12.jpg",
    alt: "residential r3 12",
    desc: "",
  },
  {
    src: "/assets/residential/r3-13.png",
    alt: "residential r3 13",
    desc: "",
  },
  {
    src: "/assets/residential/r3-14.png",
    alt: "residential r3 14",
    desc: "",
  },
  {
    src: "/assets/residential/r3-15.png",
    alt: "residential r3 15",
    desc: "",
  },
];

const info = {
  index: 3,
  name: "Multi Level Modern Home",
  type: "Residential",
  client: "",
  size: "",
  location: "Silver Lake, California",
  completedYear: "",
  title: "",
  desc: "",
};

type DemoProps = {
  imgHashed: { src: string; hash: string; alt: string; desc: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < images.length; i++) {
    const hash = await getBlurhash(images[i]?.src as string);
    hashes[images[i]?.src as string] = hash;
  }

  const imgHashed = images
    .filter((img) => hashes[img.src] !== undefined)
    .map((img) => ({
      src: img.src,
      alt: img.alt,
      hash: hashes[img.src]!,
      desc: img.desc,
    }));

  return {
    props: {
      imgHashed,
    },
  };
};

const MMGA: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput images={imgHashed} info={info} />;
};

export default MMGA;
