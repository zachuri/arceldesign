import { GetStaticProps } from "next";
import Box from "../../../components/box";
import BoxGrid from "../../../components/box-grid";
import residential from "../../../data/residential.json";
import { getBlurhash } from "next-blurhash";
import Head from "next/head";

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < residential.length; i++) {
    const hash = await getBlurhash(residential[i]?.src as string);
    hashes[residential[i]?.src as string] = hash;
  }

  const imgHashes = residential
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

const Residential: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <div key="residential">
      <Head>
        <title>ARCELDESIGN, INC. | Residential</title>
        <meta name="description" content="Residential" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxGrid title="residential">
        {residential.map((item, index) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"residential"}
              hash={imgHashes.at(index)?.hash as string}
            />
          );
        })}
      </BoxGrid>
    </div>
  );
};

export default Residential;
