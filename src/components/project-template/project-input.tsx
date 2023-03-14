import React from "react";
import Head from "next/head";
import AboutDesign from "../../components/project-template/about-design";
import Contact from "../../components/project-template/contact/contact";
import MastHead from "../../components/project-template/mast-head";

interface Props {
  info: {
    index: number;
    name: string;
    type: string;
    client: string;
    size: string;
    location: string;
    completedYear: string;
    title: string;
    desc: string;
  };
  images: { src: string; alt: string; desc: string }[];
}

const ProjectInput: React.FC<Props> = ({ info, images }) => {
  const headTitle = `ARCELDESIGN, INC. | ${info.title}`;

  return (
    <>
      <Head>
        {/* <title>ARCELDESIGN, INC. | {info.name}</title> */}
        <title>{headTitle}</title>
        <meta name="description" content={info.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MastHead
          index={info.index}
          designInfo={{
            name: info.name,
            type: info.type,
            location: info.location,
            completedYear: info.completedYear,
          }}
          image={images[0]?.src as string}
        />
        <AboutDesign
          index={info.index}
          designDesc={{
            title: info.title,
            desc: info.desc,
          }}
          designInfo={{
            name: info.name,
            type: info.type,
            client: info.client,
            size: info.size,
            location: info.location,
            completedYear: info.completedYear,
          }}
          images={images}
        />
        <Contact />
      </main>
    </>
  );
};

export default ProjectInput;
