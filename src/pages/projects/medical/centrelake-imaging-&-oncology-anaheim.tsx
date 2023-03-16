import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m1-1.jpg",
    alt: "hospitatliy m1 1",
    desc: "",
  },

  {
    src: "/assets/medical/m1-2.jpg",
    alt: "hospitatliy m1 2",
    desc: "",
  },

  {
    src: "/assets/medical/m1-3.jpg",
    alt: "hospitatliy m1 3",
    desc: "",
  },

  {
    src: "/assets/medical/m1-4.jpeg",
    alt: "hospitatliy m1 4",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "Centrelake Imagin & Oncology Diagnostic Radiology",
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

const CIOA: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput info={info} images={imgHashed} />;
};

export default CIOA;
