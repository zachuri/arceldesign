import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Image from "next/image";

interface Props {
  projectType: String;
  projects: { src: string; alt: string; area: string; address: string }[];
}

const Project: React.FC<Props> = ({ projectType, projects }) => {
  return (
    <div className="mx-5 ">
      <h1
        style={{ letterSpacing: 10 }}
        className="py-5 uppercase text-[#222222] md:text-lg lg:text-2xl"
      >
        {projectType}
      </h1>
      <Carousel className="border border-black text-white">
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
                {/* full padding breaks the slide */}
                <div className="pl-5 pt-5 pb-5">
                  <h1 className="text-md md:text-md uppercase tracking-widest text-[#222222] lg:text-xl">
                    {project.area}
                  </h1>
                  <p className="text-sm text-[#222222] md:text-sm lg:text-lg">
                    {project.address}
                  </p>
                </div>
              </>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Project;
