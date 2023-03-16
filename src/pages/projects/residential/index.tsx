import { GetStaticProps } from "next";
import Box from "../../../components/box";
import BoxGrid from "../../../components/box-grid";
import residential from "../../../data/residential.json";
import { getBlurhash } from "next-blurhash";
import Head from "next/head";

type DemoProps = {
  imgHashed: { src: string; hash: string; alt: string; address: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < residential.length; i++) {
    const hash = await getBlurhash(residential[i]?.src as string);
    hashes[residential[i]?.src as string] = hash;
  }

  const imgHashed = residential
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

const Residential: React.FC<DemoProps> = ({ imgHashed }) => {
  return (
    <div key="residential">
      <Head>
        <title>ARCELDESIGN, INC. | Residential</title>
        <meta name="description" content="Residential" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxGrid title="residential">
        {imgHashed.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"residential"}
              hash={item.hash}
              key={item.src}
            />
          );
        })}
      </BoxGrid>
    </div>
  );
};

export default Residential;
