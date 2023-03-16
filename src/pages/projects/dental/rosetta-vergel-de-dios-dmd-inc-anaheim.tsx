import { GetStaticProps } from "next/types";
import ProjectInput from "../../../components/project-template/project-input";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/dental/d9-1.jpg",
    alt: "dental 9 1",
    desc: "",
  },
  {
    src: "/assets/dental/d9-2.jpg",
    alt: "dental 9 2",
    desc: "",
  },
  {
    src: "/assets/dental/d9-3.jpg",
    alt: "dental 9 3",
    desc: "",
  },
  {
    src: "/assets/dental/d9-4.jpg",
    alt: "dental 9 4",
    desc: "",
  },
  {
    src: "/assets/dental/d9-5.jpg",
    alt: "dental 9 5",
    desc: "",
  },
];

const info = {
  index: 9,
  name: "Rosetta Vergel De Dios, DMD Inc.",
  type: "Dental",
  client: "Dr. Rosette Vergel de Dios",
  size: "2000 sq ft / 4 chairs",
  location: "Anaheim, California",
  completedYear: "2011",
  title: "Transformed...",
  desc: "A residential home becomes an attractive and charming dental office through this collaborative design. \
  The balance of the grid ceilings and widely arched entryways create separation of space, defining the different \
  areas within the dentistry. At the same time, the former residential hub becomes non-existent by the new \
  openness of the space. All new arches and soffits are reemphasized with warm color, to create a warm and welcoming feel.",
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

const RVDDDIA: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput images={imgHashed} info={info} />;
};

export default RVDDDIA;
