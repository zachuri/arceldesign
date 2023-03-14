import Box from "../../../components/box";
import BoxGrid from "../../../components/box-grid";
import dental from "../../../data/dental/dental.json";
import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next";

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < dental.length; i++) {
    const hash = await getBlurhash(dental[i]?.src as string);
    hashes[dental[i]?.src as string] = hash;
  }

  const imgHashes =dental 
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

const Dental: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <>
      <BoxGrid title="dental">
        {dental.map((item, index) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"dental"}
              hash={imgHashes.at(index)?.hash as string}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Dental;
