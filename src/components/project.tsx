import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Image from "next/image";

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

export default Project;
