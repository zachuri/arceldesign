import React from "react";
import { MainLayout } from "../components/layout";
import dental from "../data/dental/dental.json";
import corporate from "../data/corporate.json";
import medical from "../data/medical.json";
import hospitality from "../data/hospitatlity.json";
import residential from "../data/residential.json";
import Image from "next/image";

const images = [
  { src: "/assets/corporate/c1.jpg", alt: "corporate", type: "corporate" },
  { src: "/assets/dental/dental1.jpg", alt: "dental", type: "dental" },
  {
    src: "/assets/hospitality/h1.jpg",
    alt: "hospitality",
    type: "hospitality",
  },
  { src: "/assets/medical/m1.jpg", alt: "medical", type: "medical" },
  {
    src: "/assets/residential/r1.jpg",
    alt: "residential",
    type: "residential",
  },
];

function Project({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <div key={src} className="relative mb-5 p-20 text-lg md:p-40 ">
        <Image
          fill
          // allows object to fit as a cover instead of filled
          style={{ objectFit: "cover" }}
          src={src}
          alt={alt}
        />
      </div>
      <p className="text-center uppercase text-white max-md:text-xs">{alt}</p>
    </div>
  );
}

const Projects = () => {
  return (
    <body className="">
      <div className="flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Project src={"/assets/corporate/c1.jpg"} alt={"Corporate"} />
          <Project src={"/assets/dental/dental1.jpg"} alt={"Dental"} />
          <Project src={"/assets/hospitality/h1.jpg"} alt={"Hospitality"} />
          <Project src={"/assets/medical/m1.jpg"} alt={"Medical"} />
          <Project src={"/assets/residential/r1.jpg"} alt={"Residential"} />
        </div>
      </div>
    </body>
  );
};

export default Projects;
