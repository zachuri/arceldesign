import { GetStaticProps } from "next/types";
import ProjectInput from "../../../components/project-template/project-input";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/dental/d6-1.jpg",
    alt: "dental 6 1",
    desc: "",
  },
  {
    src: "/assets/dental/d6-2.jpg",
    alt: "dental 6 3",
    desc: "",
  },
  {
    src: "/assets/dental/d6-3.jpg",
    alt: "dental 6 4",
    desc: "",
  },
  {
    src: "/assets/dental/d6-4.jpg",
    alt: "dental 6 4",
    desc: "",
  },
];

const info = {
  index: 6,
  name: "Redlands Family Dental Center",
  type: "Dental",
  client: "Samir Tadha, DDS",
  size: "2165 sq ft / 5 chairs",
  location: "Redlands, California",
  completedYear: "2009",
  title: "Nature Therapy...",
  desc: 'The combination of having incorporated natural stones and wood tones in this design space creates \
  a cozy and “homier" feel, while instilling solidity. Together, all natural elements, hues and tones of warm \
  butterscotch and cooper create a pleasant and welcoming atmosphere. Large-scale furnishings also support \
  its state of grandness and fine quality while ensuring a welcoming feel.',
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

const RFDR: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput images={imgHashed} info={info} />;
};

export default RFDR;
