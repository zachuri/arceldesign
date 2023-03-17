import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m15-1.jpg",
    alt: "medical m15 1",
    desc: "",
  },
  {
    src: "/assets/medical/m15-2.jpg",
    alt: "medical m15 2",
    desc: "",
  },
  {
    src: "/assets/medical/m15-3.jpg",
    alt: "medical m15 3",
    desc: "",
  },
  {
    src: "/assets/medical/m15-4.jpg",
    alt: "medical m15 4",
    desc: "",
  },
];

const info = {
  index: 15,
  name: "C K Chan, OD",
  type: "Medical",
  client: "Dr. C.K. Chan",
  size: "1148 sq ft | 2 exam rooms |1 dispensary area",
  location: "West Covina, California",
  completedYear: "2009",
  title: "Optical Illusion...",
  desc: "Shades of brown and accents of taupe give a small space a big personality. \
  Multiple arches throughout the office heighten and widen the feel of all narrow hallways, \
  while also allowing ample circulation. The importance of lighting in this optometry office \
  has been perfectly balanced through a lighting design that provides the ideal amount of \
  light for patients, as they search for their perfect eye wear.",
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
