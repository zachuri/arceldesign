import Box from "../../../components/box";
import BoxGrid from "../../../components/box-grid";
import corporate from "../../../data/corporate.json";
import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next";
import Head from "next/head";

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < corporate.length; i++) {
    const hash = await getBlurhash(corporate[i]?.src as string);
    hashes[corporate[i]?.src as string] = hash;
  }

  const imgHashes = corporate
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

const Corporate: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <>
      <Head>
        <title>ARCELDESIGN, INC. | Corporate</title>
        <meta name="description" content="Corporate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxGrid title="corporate">
        {corporate.map((item, index) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"corporate"}
              hash={imgHashes.at(index)?.hash as string}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Corporate;
