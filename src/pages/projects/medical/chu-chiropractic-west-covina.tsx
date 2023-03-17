import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m13-1.jpg",
    alt: "medical m13 1",
    desc: "",
  },

  {
    src: "/assets/medical/m13-2.jpg",
    alt: "medical m13 2",
    desc: "",
  },

  {
    src: "/assets/medical/m13-3.jpg",
    alt: "medical m13 3",
    desc: "",
  },

  {
    src: "/assets/medical/m13-4.jpg",
    alt: "medical m13 4",
    desc: "",
  },

  {
    src: "/assets/medical/m13-5.jpg",
    alt: "medical m13 5",
    desc: "",
  },
];

const info = {
  index: 13,
  name: "Chu Chiropractic",
  type: "Medical",
  client: "Dr Gary Chu",
  size: "1,300 sq ft / 4 Treatment Rooms / X-ray Room",
  location: "West Covina, California",
  completedYear: "2010",
  title: "Equal Tranquility....",
  desc: "This modern transitional style is successfully accomplished through the \
  careful selection of furnishings, materials and color. The combination of these modern \
  furnishings and warm color art pieces give the space a soothing, warm feel. The \
  crisp white flooring tile and blue walls, including its warm wood tones, becomes intermixed, \
  equally balancing the coolness and warmth of nature. Earth tone fabrics and warm oranges \
  add a splash of color in several modern art pieces. The concept of balancing cool and \
  warm creates a soothing space where patients can relax and enjoy the services.",
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
