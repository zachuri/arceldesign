import React from "react";
import BoxGrid from "../../../components/box-grid";
import hospitality from "../../../data/hospitatlity.json";
import Box from "../../../components/box";
import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next";
import Head from "next/head";

type DemoProps = {
  imgHashed: { src: string; hash: string; alt: string; address: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < hospitality.length; i++) {
    const hash = await getBlurhash(hospitality[i]?.src as string);
    hashes[hospitality[i]?.src as string] = hash;
  }

  const imgHashed = hospitality
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

const Hospitality: React.FC<DemoProps> = ({ imgHashed }) => {
  return (
    <div key="hospitality">
      <Head>
        <title>ARCELDESIGN, INC. | Hospitality</title>
        <meta name="description" content="Hospitality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxGrid title="hospitality">
        {imgHashed.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"hospitality"}
              hash={item.hash}
              key={item.src}
            />
          );
        })}
      </BoxGrid>
    </div>
  );
};

export default Hospitality;
