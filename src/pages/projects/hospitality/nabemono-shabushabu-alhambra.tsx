import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from 'next/types';
import { getBlurhash } from 'next-blurhash';

const images = [
  {
    src: "/assets/hospitality/h1-1.jpeg",
    alt: "hospitatliy h1 1",
    desc: "",
  },
  {
    src: "/assets/hospitality/h1-2.jpeg",
    alt: "hospitatliy h1 2",
    desc: "",
  },

  {
    src: "/assets/hospitality/h1-3.jpeg",
    alt: "hospitatliy h1 3",
    desc: "",
  },
  {
    src: "/assets/hospitality/h1-4.jpeg",
    alt: "hospitatliy h1 4",
    desc: "",
  },

  {
    src: "/assets/hospitality/h1-5.jpeg",
    alt: "hospitatliy h1 5",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "NABEMONO SHABUSHABU",
  type: "HOSPITALITY",
  client: "",
  size: "",
  location: "Alhabmbra, California",
  completedYear: "2019",
  title: "MODEN RESTURAUNT",
  desc: "NABEMONO SHABU-SHABU recently opened for a business located in the popular \
          food hub in the city of Alhambra created the expected set benchmark of modern \
         restaurant design drawing a millennial crowd, particularly the inset floor \
         tile laid diagonally serving as a “red carpet “ running continuously to the \
         back vertical wall. This eye-catching tile design consists of geometric shapes \
         and floral patterns repeated between the ornamental elements created by Porcenalosa \
         - USA this handcrafted mosaic tile. Each tile displays vintage and elegant design \
         with shades of antique silver serving as a focal point for the entire space.",
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

const NSA: React.FC<DemoProps> = ({imgHashed}) => {
  return <ProjectInput images={imgHashed} info={info} />;
};

export default NSA;
