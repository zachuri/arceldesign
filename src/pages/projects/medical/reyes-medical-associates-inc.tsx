import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m14-1.jpg",
    alt: "medical m14 1",
    desc: "",
  },
  {
    src: "/assets/medical/m14-2.jpg",
    alt: "medical m14 2",
    desc: "",
  },
  {
    src: "/assets/medical/m14-3.jpg",
    alt: "medical m14 3",
    desc: "",
  },
  {
    src: "/assets/medical/m14-4.jpg",
    alt: "medical m14 4",
    desc: "",
  },
];

const info = {
  index: 14,
  name: "Reyes Medical Associates, Inc.",
  type: "Medical",
  client: "Dr. Antonio Reyes, Dr. Elizabeth Reyes",
  size: "2513 sq ft  / 5 exam rooms",
  location: "",
  completedYear: "2008",
  title: "Sophisticated Light...",
  desc: "This pediatric office becomes alive with sinuous curves and natural light \
  throughout the space. The soft touches of ever flow, including the neutral colors, emanate \
  a calm atmosphere. Having implemented curvature on the ceilings and throughout the walls, \
  not only present the establishment’s playful side, but also help to guide patients to their destinations and exam rooms.",
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
