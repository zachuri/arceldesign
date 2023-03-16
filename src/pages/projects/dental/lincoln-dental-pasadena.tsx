import { GetStaticProps } from "next/types";
import ProjectInput from "../../../components/project-template/project-input";
import { getBlurhash } from "next-blurhash";

const images = [
  {
    src: "/assets/dental/d4-1.jpg",
    alt: "dental 4 1",
    desc: "",
  },
  {
    src: "/assets/dental/d4-2.jpg",
    alt: "dental 4 1",
    desc: "",
  },
  {
    src: "/assets/dental/d4-3.jpg",
    alt: "dental 4 2",
    desc: "",
  },
  {
    src: "/assets/dental/d4-4.jpg",
    alt: "dental 4 4",
    desc: "",
  },
  {
    src: "/assets/dental/d4-5.jpg",
    alt: "dental 4 5",
    desc: "",
  },
];

const info = {
  index: 4,
  name: "Lincoln Dental",
  type: "Dental",
  client: "Dr. Walter Lam, DDS",
  size: "1300 sq ft | 4 Chairs",
  location: "Pasadena, California",
  completedYear: "2010",
  title: "Modern Elegance...",
  desc: "Modern Elegance. Largely influenced by Japanese design, this space reflects a fusion of modern \
  and Asian through color and minimalism. The modern style is continuous throughout with sleek order, focus and \
  functionality. It's integrating geometric patterns and clean lines create a stable and serene environment. \
  All colors combined are vibrant and adjacent to a neutral gray tone, or pure whites, to help emanate \
  its boldness and enhance the overall therapeutic visual for patients.",
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

const LDP: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput images={imgHashed} info={info} />;
};

export default LDP;
