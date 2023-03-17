import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m10-1.jpg",
    alt: "medical m10 1",
    desc: "",
  },

  {
    src: "/assets/medical/m10-2.jpg",
    alt: "medical m10 2",
    desc: "",
  },

  {
    src: "/assets/medical/m10-3.jpg",
    alt: "medical m10 3",
    desc: "",
  },

  {
    src: "/assets/medical/m10-4.jpg",
    alt: "medical m10 4",
    desc: "",
  },

  {
    src: "/assets/medical/m10-5.jpg",
    alt: "medical m10 5",
    desc: "",
  },
];

const info = {
  index: 10,
  name: "Omni Eye Care",
  type: "Medical",
  client: "Shelly Bagai-Lapsi, MD",
  size: "1500 sq ft",
  location: "Covina, California",
  completedYear: "2013",
  title: "Design Centered",
  desc: "Color can transform a space from purely functional to cool and welcoming. \
  In this practice, the natural light from the skylight and two-tone stone flooring \
  inspired an uplifting, blue-based color palette. Stunning colorful Artwork in \
  canvas prints and mosaic glass tile turquoise in color complement calmness and enjoyable environment.",
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
