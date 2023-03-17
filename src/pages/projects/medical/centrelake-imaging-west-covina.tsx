import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m9-1.jpg",
    alt: "medical m9 1",
    desc: "",
  },
  {
    src: "/assets/medical/m9-2.jpg",
    alt: "medical m9 2",
    desc: "",
  },
  {
    src: "/assets/medical/m9-3.jpg",
    alt: "medical m9 3",
    desc: "",
  },
  {
    src: "/assets/medical/m9-4.jpg",
    alt: "medical m9 4",
    desc: "",
  },
  {
    src: "/assets/medical/m9-5.jpg",
    alt: "medical m9 5",
    desc: "",
  },
  {
    src: "/assets/medical/m9-6.jpg",
    alt: "medical m9 6",
    desc: "",
  },
  {
    src: "/assets/medical/m9-7.jpg",
    alt: "medical m9 7",
    desc: "",
  },
  {
    src: "/assets/medical/m9-8.jpg",
    alt: "medical m9 8",
    desc: "",
  },
  {
    src: "/assets/medical/m9-9.jpg",
    alt: "medical m9 9",
    desc: "",
  },
];

const info = {
  index: 9,
  name: "Centrelake Imaging Center",
  type: "Medical",
  client: "Centrelake Medical Group Inc.",
  size: "30,000 sq / ft ",
  location: "West Covina, California",
  completedYear: "2014",
  title: "Soothing Nature...",
  desc: "Naturalistic finishes and abundant daylight provides a backdrop to color \
  accents that enhance an atmosphere of comfort and caring. The warm & cool color tones \
  bring calmness yet sophisticated feel with freshness to the entire space.",
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
