import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Image from "next/image";

interface Props {
  projectType: String;
  projects: { src: string; alt: string; area: string; address: string }[];
}

const Project: React.FC<Props> = ({ projectType, projects }) => {
  return (
    <>
      <h1
        style={{ letterSpacing: 10 }}
        className="text-2xl uppercase text-[#222222]"
      >
        {projectType}
      </h1>
      <Carousel className="text-white">
        {projects.map((project, index) => {
          return (
            // NOTE: carousel needs index -> either manually or index with map
            <CarouselItem index={index} key={index}>
              <>
                <img
                  src={project.src}
                  alt={project.alt}
                  height={500}
                  width={500}
                />
                <div className="text-center">
                  <h1 className="text-md uppercase tracking-widest text-[#222222] md:text-2xl">
                    {project.area}
                  </h1>
                  <p className="text-xs text-[#222222] md:text-lg">
                    {project.address}
                  </p>
                </div>
              </>
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
};

export default Project;
