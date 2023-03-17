import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/residential/r1-1.jpg",
    alt: "residential r1 1",
    desc: "",
  },
  {
    src: "/assets/residential/r1-2.jpg",
    alt: "residential r1 2",
    desc: "",
  },

  {
    src: "/assets/residential/r1-3.jpeg",
    alt: "residential r1 3",
    desc: "",
  },

  {
    src: "/assets/residential/r1-4.jpg",
    alt: "residential r1 4",
    desc: "",
  },

  {
    src: "/assets/residential/r1-5.jpg",
    alt: "residential r1 5",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "Punsalang & Lim Residence",
  type: "Residential",
  client: "Arcel Punsalang, Evelyn Lim Punsalang",
  size: "",
  location: "Walnut, California",
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
