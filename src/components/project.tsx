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
      <Carousel className=" py-10 text-white">
        {projects.map((project, index) => {
          return (
            // NOTE: carousel needs index -> either manually or index with map
            <CarouselItem index={index} key={index}>
              <>
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={500}
                  height={500}
                  loading="lazy"
                />
                <h1 className="text-[#222222]">{project.area}</h1>
                <p className="text-[#222222]">{project.address}</p>
              </>
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
};

export default Project;
