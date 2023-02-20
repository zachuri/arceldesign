import { useRouter } from "next/router";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import LayoutMotion from "./motion";

interface Props {
  type: String;
  projects: { src: string; alt: string; area: string; address: string }[];
}

const Project: React.FC<Props> = ({ type, projects }) => {
  const nextRouter = useRouter();

  return (
    <LayoutMotion>
      <div className="mx-5 ">
        <h1
          style={{ letterSpacing: 10 }}
          className="py-5 uppercase text-[#222222] md:text-lg lg:text-2xl"
        >
          {type}
        </h1>
        <Carousel className=" text-white">
          {projects.map((project, index) => {
            return (
              // NOTE: carousel needs index -> either manually or index with map
              <CarouselItem index={index} key={index}>
                <>
                  <button
                    onClick={() => {
                      // Format the link address
                      const name = project.alt
                        .replace(/[,.\s]+/g, "-")
                        .toLowerCase();

                      const address = project.address
                        .split(",")[0]
                        ?.toLowerCase();

                      const navigate =
                        name + "-" + address?.replace(/[,.\s]+/g, "-");

                      // next router push to project of type
                      nextRouter.push({
                        pathname: `${type + "/" + navigate}`,
                      });
                    }}
                  >
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
                  </button>
                </>
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </LayoutMotion>
  );
};

export default Project;
