import Box from "../../../components/box";
import BoxGrid from "../../../components/box-grid";
import corporate from "../../../data/corporate.json";
import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next";
import Head from "next/head";

type DemoProps = {
  imgHashed: { src: string; hash: string; alt: string; address: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < corporate.length; i++) {
    const hash = await getBlurhash(corporate[i]?.src as string);
    hashes[corporate[i]?.src as string] = hash;
  }

  const imgHashed = corporate
    .filter((img) => hashes[img.src] !== undefined)
    .map((img) => ({
      src: img.src,
      alt: img.alt,
      address: img.address,
      hash: hashes[img.src]!,
    }));

  return {
    props: {
      imgHashed,
    },
  };
};

const Corporate: React.FC<DemoProps> = ({ imgHashed }) => {
  return (
    <>
      <Head>
        <title>ARCELDESIGN, INC. | Corporate</title>
        <meta name="description" content="Corporate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxGrid title="corporate">
        {imgHashed.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"corporate"}
              hash={item.hash}
              key={item.src}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Corporate;
