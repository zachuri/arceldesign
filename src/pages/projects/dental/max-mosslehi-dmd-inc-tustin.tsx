import { getBlurhash } from "next-blurhash";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";

const images = [
  {
    src: "/assets/dental/d12-1.png",
    alt: "dental 12 1",
    desc: "",
  },
  {
    src: "/assets/dental/d12-2.png",
    alt: "dental 12 2",
    desc: "",
  },
  {
    src: "/assets/dental/d12-3.png",
    alt: "dental 12 3",
    desc: "",
  },
  {
    src: "/assets/dental/d12-4.png",
    alt: "dental 12 4",
    desc: "",
  },
  {
    src: "/assets/dental/d12-5.png",
    alt: "dental 12 5",
    desc: "",
  },
];

const info = {
  index: 12,
  name: "Max Mosslehi, DMD, Inc.",
  type: "Dental",
  client: "Dr. Max Mosslehi",
  size: "2000 sq ft / 5 chairs ",
  location: "Tustin, California",
  completedYear: "2016",
  title: "Simply Natural",
  desc: "The natural colors we can’t live without… Earth tone color palette adds the look and feels \
  of nature to the entire space. The culcutta marble stone on the reception counter and the huge \
  abstract paintings organic pattern with rich brown and blue gives an intimate and tranquil feel for the entire dental office ",
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

const OVDIWC: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput images={imgHashed} info={info} />;
};

export default OVDIWC;
