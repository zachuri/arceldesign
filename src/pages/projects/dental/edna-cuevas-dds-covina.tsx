import Head from "next/head";
import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact/contact";
import MastHead from "../../../components/project-template/mast-head";
import ProjectInput from "../../../components/project-template/project-input";
import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next/types";

const images = [
  {
    src: "/assets/dental/d2-1.jpg",
    alt: "dental 2 1",
    desc: "",
  },
  {
    src: "/assets/dental/d2-2.jpg",
    alt: "dental 2 2",
    desc: "",
  },
  {
    src: "/assets/dental/d2-3.jpg",
    alt: "dental 2 3",
    desc: "",
  },
  {
    src: "/assets/dental/d2-4.jpg",
    alt: "dental 2 4",
    desc: "",
  },
  {
    src: "/assets/dental/d2-5.jpg",
    alt: "dental 2 5",
    desc: "",
  },
  {
    src: "/assets/dental/d2-6.jpg",
    alt: "dental 2 6",
    desc: "",
  },
  {
    src: "/assets/dental/d2-7.jpg",
    alt: "dental 2 7",
    desc: "",
  },
];

const info = {
  index: 2,
  name: "Edna Cuevas, DDS",
  type: "Dental",
  client: "",
  size: "",
  location: "Covina, California",
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

const ECDC: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput info={info} images={imgHashed} />;
};

export default ECDC;
