import React from "react";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/residential/r2-1.jpg",
    alt: "residential r2 1",
    desc: "",
  },
  {
    src: "/assets/residential/r2-2.jpg",
    alt: "residential r2 2",
    desc: "",
  },
  {
    src: "/assets/residential/r2-3.jpg",
    alt: "residential r2 3",
    desc: "",
  },
  {
    src: "/assets/residential/r2-4.jpg",
    alt: "residential r2 4",
    desc: "",
  },
  {
    src: "/assets/residential/r2-5.jpg",
    alt: "residential r2 5",
    desc: "",
  },
  {
    src: "/assets/residential/r2-6.jpg",
    alt: "residential r2 6",
    desc: "",
  },
  {
    src: "/assets/residential/r2-7.jpg",
    alt: "residential r2 7",
    desc: "",
  },
];

const info = {
  index: 2,
  name: "Lee Residence",
  type: "Residential",
  client: "Lee",
  size: "",
  location: "Diamond Bar, California",
  completedYear: "",
  title: "",
  desc: "Perched atop Diamond Bar 's most celebrated community, this exquisite Tuscany style \
  residence is one of the most thoughtfully crafted estates available in The Country. The main \
  house entrance features a marble stair case complemented by 22 feet cathedral ceilings. The spacious \
  living room is flooded with natural light. Across from the great room is the elegant library with \
  custom shelves and parquet hardwood floor. Walk past the gallery and the family room, a true chefs \
  kitchen greets those who enjoy cooking and entertaining their guests. The intimate nook with double \
  French doors leads to the manicured landscaping and infinity pool. Ascend one flight up via the \
  striking mahogany railed staircase or by the private internal elevator where the grand master suite and \
  three junior suites await. The 1,400 sq. ft. grand master suite boasts extraordinary views of the \
  surrounding valley, sparkled with city lights at night and Catalina Island. The ground level of the main \
  house features a dancing room / home theater, an exercise room, sauna, massage room, parlor room, and a \
  maids quarter. A separate 500 sq. ft. guest house with a spacious panoramic rooftop balcony located in the \
  designer landscaped garden next to the tennis court.",
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
