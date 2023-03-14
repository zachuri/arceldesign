import React from "react";
import BoxGrid from "../../../components/box-grid";
import hospitality from "../../../data/hospitatlity.json";
import Box from "../../../components/box";
import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next";
import Head from "next/head";

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < hospitality.length; i++) {
    const hash = await getBlurhash(hospitality[i]?.src as string);
    hashes[hospitality[i]?.src as string] = hash;
  }

  const imgHashes = hospitality
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

const Hospitality: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <>
      <Head>
        <title>ARCELDESIGN, INC. | Hospitality</title>
        <meta name="description" content="Hospitality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxGrid title="hospitality">
        {hospitality.map((item, index) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"hospitality"}
              hash={imgHashes.at(index)?.hash as string}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Hospitality;
