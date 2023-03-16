import { GetStaticProps } from "next/types";
import ProjectInput from "../../../components/project-template/project-input";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/dental/d3-1.jpg",
    alt: "dental 3 1",
    desc: "",
  },
  {
    src: "/assets/dental/d3-2.jpg",
    alt: "dental 3 2",
    desc: "",
  },
  {
    src: "/assets/dental/d3-3.jpg",
    alt: "dental 3 3",
    desc: "",
  },
  {
    src: "/assets/dental/d3-4.jpg",
    alt: "dental 3 4",
    desc: "",
  },
  {
    src: "/assets/dental/d3-5.jpeg",
    alt: "dental 3 5",
    desc: "",
  },
];

const info = {
  index: 3,
  name: "Comfort Dental",
  type: "Dental",
  client: "Julian Nguyen, DDS, MS",
  size: "1500 sq ft | 4 Chairs",
  location: "Pasadena, California",
  completedYear: "2013",
  title: "Modern Comfort....",
  desc: "Modern contemporary style, structure, and form combine harmoniously for this dental practice, creating an attractively ideal space, one minimal and therapeutic.",
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

const CDP: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput info={info} images={imgHashed} />;
};

export default CDP;
