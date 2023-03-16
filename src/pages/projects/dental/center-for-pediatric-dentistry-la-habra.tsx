import { GetStaticProps } from "next/types";
import ProjectInput from "../../../components/project-template/project-input";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/dental/d1-1.jpg",
    alt: "dental 1 1",
    desc: "",
  },
  {
    src: "/assets/dental/d1-2.jpg",
    alt: "dental 1 2",
    desc: "",
  },
  {
    src: "/assets/dental/d1-3.jpg",
    alt: "dental 1 3",
    desc: "",
  },
  {
    src: "/assets/dental/d1-4.jpg",
    alt: "dental 1 4",
    desc: "",
  },
  {
    src: "/assets/dental/d1-5.jpg",
    alt: "dental 1 5",
    desc: "",
  },
  {
    src: "/assets/dental/d1-6.jpg",
    alt: "dental 1 6",
    desc: "",
  },
  {
    src: "/assets/dental/d1-7.jpg",
    alt: "dental 1 7",
    desc: "",
  },
  {
    src: "/assets/dental/d1-8.jpg",
    alt: "dental 1 8",
    desc: "",
  },
];

const info = {
  index: 1,
  name: "Center For Pediatric Dentistry",
  type: "Dental",
  client: "",
  size: "",
  location: "La Habra, California",
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

const COPLH: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput info={info} images={imgHashed} />;
};

export default COPLH;
