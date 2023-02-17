import React from "react";
import Carousel from "../components/carousel";
import CarouselItem from "../components/carousel-item";
import Image from "next/image";

const dentals = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home2.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home2.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
];

interface Props {
  projectType: String;
  projects: { src: string; alt: string }[];
}

const Project: React.FC<Props> = ({ projectType, projects }) => {
  return (
    <>
      <h1 className="text-2xl">{projectType}</h1>
      <Carousel className=" text-white lg:py-10">
        {projects.map((project, index) => {
          return (
            // NOTE: carousel needs index -> either manually or index with map
            <CarouselItem index={index}>
              <Image
                src={project.src}
                alt={project.alt}
                width={500}
                height={500}
              />
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
};

const Projects = () => {
  return (
    <div className="bg-[#fbfbfb]">
      <Project projectType="Dental" projects={dentals} />
    </div>
  );
};

export default Projects;
