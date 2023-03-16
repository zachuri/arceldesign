import Box from "../../../components/box";
import BoxGrid from "../../../components/box-grid";
import dental from "../../../data/dental.json";
import { getBlurhash } from "next-blurhash";
import { GetStaticProps } from "next";
import Head from "next/head";

type DemoProps = {
  imgHashed: { src: string; hash: string; alt: string; address: string }[];
};

export const getStaticProps: GetStaticProps<DemoProps> = async () => {
  const hashes: { [src: string]: string | undefined } = {};

  for (let i = 0; i < dental.length; i++) {
    const hash = await getBlurhash(dental[i]?.src as string);
    hashes[dental[i]?.src as string] = hash;
  }

  const imgHashed = dental
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

const Dental: React.FC<DemoProps> = ({ imgHashed }) => {
  return (
    <div key="dental">
      <Head>
        <title>ARCELDESIGN, INC. | Dental</title>
        <meta name="description" content="Dental" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoxGrid title="dental">
        {imgHashed.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"dental"}
              hash={item.hash}
              key={item.src}
            />
          );
        })}
      </BoxGrid>
    </div>
  );
};

export default Dental;
