import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m2-1.jpeg",
    alt: "hospitatliy m2 1",
    desc: "",
  },

  {
    src: "/assets/medical/m2-2.jpeg",
    alt: "hospitatliy m2 2",
    desc: "",
  },

  {
    src: "/assets/medical/m2-3.jpeg",
    alt: "hospitatliy m2 3",
    desc: "",
  },

  {
    src: "/assets/medical/m2-4.jpeg",
    alt: "hospitatliy m2 4",
    desc: "",
  },

  {
    src: "/assets/medical/m2-5.jpg",
    alt: "hospitatliy m2 5",
    desc: "",
  },
];

const info = {
  index: 2,
  name: "Mayflower Medical Group",
  type: "Medical",
  client: "",
  size: "",
  location: "Anaheim, California",
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
