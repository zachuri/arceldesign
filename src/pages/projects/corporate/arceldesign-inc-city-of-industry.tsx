import { getBlurhash } from "next-blurhash";
import ProjectInput from "../../../components/project-template/project-input";
import { GetStaticProps } from "next/types";

const images = [
  {
    src: "/assets/corporate/c6-1.jpg",
    alt: "corporate 6 1",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-2.jpg",
    alt: "corporate 6 2",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-3.jpg",
    alt: "corporate 6 3",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-4.jpg",
    alt: "corporate 6 4",
    desc: "",
  },
  {
    src: "/assets/corporate/c6-5.jpg",
    alt: "corporate 6 5",
    desc: "",
  },
];

const info = {
  index: 6,
  name: "Arceldesign, Inc.",
  type: "Corporate",
  client: "Arcel R. Punsalang, CID",
  size: "800 sq ft",
  location: "City of Industry, California",
  completedYear: "2012",
  title: "Modern Form.",
  desc: 'Contemporary and stylish, this "Design Studio" is perfect for entertainment and personal \
  enjoyment while conceptualizing design for a client. The center ceiling soffit with semi-curve transition \
  down to the wall, paired with vibrant carpet enlivens the space while the black borders, the \
  decorative mirror-like wall partition, and grayish paint create an upscale polished appearance.',
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

const AICI: React.FC<DemoProps> = ({ imgHashed }) => {
  return <ProjectInput info={info} images={imgHashed} />;
};

export default AICI;
