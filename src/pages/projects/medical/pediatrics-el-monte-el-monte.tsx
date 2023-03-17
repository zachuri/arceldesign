import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m6-1.png",
    alt: "hospitatliy m6 1",
    desc: "",
  },
  {
    src: "/assets/medical/m6-2.png",
    alt: "hospitatliy m6 2",
    desc: "",
  },
  {
    src: "/assets/medical/m6-3.jpg",
    alt: "hospitatliy m6 3",
    desc: "",
  },
  {
    src: "/assets/medical/m6-4.png",
    alt: "hospitatliy m6 4",
    desc: "",
  },
];

const info = {
  index: 6,
  name: "Pediatrics El Monte",
  type: "Medical",
  client: "",
  size: "",
  location: "El Monte, California",
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
