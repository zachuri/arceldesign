import Box from "../../components/box";
import BoxGrid from "../../components/box-grid";
import { GetStaticProps } from "next";
import { getBlurhash } from "next-blurhash";

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const images = [
    { src: "/assets/corporate/c1.jpg" },
    { src: "/assets/dental/d1.jpg" },
    { src: "/assets/hospitality/h1.jpg" },
    { src: "/assets/medical/m1.jpg" },
    { src: "/assets/residential/r1.jpg" },
  ];

  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < images.length; i++) {
    const hash = await getBlurhash(images[i]?.src as string);
    hashes[images[i]?.src as string] = hash;
  }

  const imgHashes = images
    .filter((img) => hashes[img.src] !== undefined)
    .map((img) => ({
      src: img.src,
      hash: hashes[img.src]!,
    }));

  return {
    props: {
      imgHashes,
    },
  };
};

const Projects: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <div>
      <BoxGrid title={"projects"}>
        <Box
          src={"/assets/corporate/c1.jpg"}
          alt={"corporate"}
          address={""}
          type={"projects"}
          hash={imgHashes.at(0)?.hash as string}
        />
        <Box
          src={"/assets/dental/dental1.jpg"}
          alt={"dental"}
          address={""}
          type={"projects"}
          hash={imgHashes.at(1)?.hash as string}
        />
        <Box
          src={"/assets/hospitality/h1.jpg"}
          alt={"hospitality"}
          address={""}
          type={"projects"}
          hash={imgHashes.at(2)?.hash as string}
        />

        {/* Last two stay hidden when medium and up screen */}
        <div className="md:hidden">
          <Box
            src={"/assets/medical/m1.jpg"}
            alt={"medical"}
            address={""}
            type={"projects"}
            hash={imgHashes.at(3)?.hash as string}
          />
        </div>
        <div className="md:hidden">
          <Box
            src={"/assets/residential/r1.jpg"}
            alt={"residential"}
            address={""}
            type={"projects"}
            hash={imgHashes.at(4)?.hash as string}
          />
        </div>

        {/* For medium and above screen -> center last row */}
        {/* For smaller screens stay hidden */}
        <div className="mt-10 max-md:hidden md:col-span-3 md:grid md:justify-items-stretch">
          <div className="grid gap-6 md:grid-cols-6">
            <div className="md:col-start-2 md:col-end-4">
              <Box
                src={"/assets/medical/m1.jpg"}
                alt={"medical"}
                address={""}
                type={"projects"}
                hash={imgHashes.at(3)?.hash as string}
              />
            </div>
            <div className="md:col-start-4 md:col-end-6">
              <Box
                src={"/assets/residential/r1.jpg"}
                alt={"residential"}
                address={""}
                type={"projects"}
                hash={imgHashes.at(4)?.hash as string}
              />
            </div>
          </div>
        </div>
      </BoxGrid>
    </div>
  );
};

export default Projects;
