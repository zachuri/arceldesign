import React from "react";
import BoxGrid from "../../../components/box-grid";
import Box from "../../../components/box";
import medical from "../../../data/medical.json";
import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next";
import Head from "next/head";

type DemoProps = {
  imgHashes: { src: string; hash: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < medical.length; i++) {
    const hash = await getBlurhash(medical[i]?.src as string);
    hashes[medical[i]?.src as string] = hash;
  }

  const imgHashes = medical
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

const Medical: React.FC<DemoProps> = ({ imgHashes }) => {
  return (
    <>
      <Head>
        <title>ARCELDESIGN, INC. | Medical</title>
        <meta name="description" content="Medical" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxGrid title="medical">
        {medical.map((item, index) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"medical"}
              hash={imgHashes.at(index)?.hash as string}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Medical;
