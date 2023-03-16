import { GetStaticProps } from "next/types";
import ProjectInput from "../../../components/project-template/project-input";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/dental/d10-1.jpg",
    alt: "dental 10 1",
    desc: "",
  },
  {
    src: "/assets/dental/d10-2.jpg",
    alt: "dental 10 2",
    desc: "",
  },
  {
    src: "/assets/dental/d10-3.jpg",
    alt: "dental 10 3",
    desc: "",
  },
  {
    src: "/assets/dental/d10-4.jpg",
    alt: "dental 10 4",
    desc: "",
  },
  {
    src: "/assets/dental/d10-5.jpg",
    alt: "dental 10 5",
    desc: "",
  },
];

const info = {
  index: 10,
  name: "Orlando Vales, DDS, Inc.",
  type: "Dental",
  client: "Orlando Vales, DDS",
  size: "1117 sq ft / 3 chairs",
  location: "West Covina, California",
  completedYear: "2010",
  title: "Sleek and Modern...",
  desc: "Bold hues of aqua envelop the space, promoting the subtle afterthought to the masculine \
  side of the practice. In addition, floral accent touches and curve framed mirrors, \
  hinting femininity, create a balance needed for the accommodation of all guests.",
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
