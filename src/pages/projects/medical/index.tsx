import React from "react";
import BoxGrid from "../../../components/box-grid";
import Box from "../../../components/box";
import medical from "../../../data/medical.json";
import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next";
import Head from "next/head";

type DemoProps = {
  imgHashed: { src: string; hash: string; alt: string; address: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < medical.length; i++) {
    const hash = await getBlurhash(medical[i]?.src as string);
    hashes[medical[i]?.src as string] = hash;
  }

  const imgHashed = medical
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

const Medical: React.FC<DemoProps> = ({ imgHashed }) => {
  return (
    <div key="medical">
      <Head>
        <title>ARCELDESIGN, INC. | Medical</title>
        <meta name="description" content="Medical" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxGrid title="medical">
        {imgHashed.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"medical"}
              hash={item.hash}
              key={item.src}
            />
          );
        })}
      </BoxGrid>
    </div>
  );
};

export default Medical;
