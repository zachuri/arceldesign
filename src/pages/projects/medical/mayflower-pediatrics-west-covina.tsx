import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m12-1.jpg",
    alt: "medical m12 1",
    desc: "",
  },

  {
    src: "/assets/medical/m12-2.jpg",
    alt: "medical m12 2",
    desc: "",
  },

  {
    src: "/assets/medical/m12-3.jpg",
    alt: "medical m12 3",
    desc: "",
  },

  {
    src: "/assets/medical/m12-4.jpg",
    alt: "medical m12 4",
    desc: "",
  },

  {
    src: "/assets/medical/m12-5.jpg",
    alt: "medical m12 5",
    desc: "",
  },
];

const info = {
  index: 12,
  name: "Mayflower Pediatrics",
  type: "Medical",
  client: "Cotta Development Inc.",
  size: "1500 sq ft",
  location: "West Covina, California",
  completedYear: "2014",
  title: "Playtime...",
  desc: "This playful pediatric practice entertains the imagination of toddlers, \
  and children of all ages, through colorful and creative artworks bring out a lively \
  ambiance. From the colorful seating to fun signage, children of all ages can become \
  entertained in multiple ways, making their fun wait. ",
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
