import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m3-1.jpg",
    alt: "hospitatliy m3 1",
    desc: "",
  },

  {
    src: "/assets/medical/m3-2.jpg",
    alt: "hospitatliy m3 2",
    desc: "",
  },

  {
    src: "/assets/medical/m3-3.jpg",
    alt: "hospitatliy m3 3",
    desc: "",
  },
  {
    src: "/assets/medical/m3-4.jpg",
    alt: "hospitatliy m3 4",
    desc: "",
  },
  {
    src: "/assets/medical/m3-5.jpg",
    alt: "hospitatliy m3 5",
    desc: "",
  },
];

const info = {
  index: 3,
  name: "Centrelake Imaging Center Chino",
  type: "Medical",
  client: "",
  size: "",
  location: "Chino, California",
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
