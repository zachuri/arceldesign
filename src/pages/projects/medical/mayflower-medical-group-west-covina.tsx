import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/medical/m11-1.jpg",
    alt: "medical m11 1",
    desc: "",
  },
  {
    src: "/assets/medical/m11-2.jpg",
    alt: "medical m11 2",
    desc: "",
  },
  {
    src: "/assets/medical/m11-3.jpg",
    alt: "medical m11 3",
    desc: "",
  },
  {
    src: "/assets/medical/m11-4.jpg",
    alt: "medical m11 4",
    desc: "",
  },
  {
    src: "/assets/medical/m11-5.jpg",
    alt: "medical m11 5",
    desc: "",
  },
  {
    src: "/assets/medical/m11-6.jpg",
    alt: "medical m11 5",
    desc: "",
  },
  {
    src: "/assets/medical/m11-7.jpg",
    alt: "medical m11 5",
    desc: "",
  },
  {
    src: "/assets/medical/m11-8.jpg",
    alt: "medical m11 5",
    desc: "",
  },
];

const info = {
  index: 11,
  name: "Mayflower Medical Group",
  type: "Medical",
  client: "Cottage Development Inc.",
  size: "15,000 sq ft",
  location: "West Covina, California",
  completedYear: "2014",
  title: "Instant Atmosphere...",
  desc: "This medical facility features a distinctly masculine look. The deep blue \
  and orange accent walls and the dark veneer wood counter create a more intimate atmosphere. \
  While the washed wood look porcelain floor tile and colorful artworks complete \
  the ultimate relaxation while being treated. ",
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
