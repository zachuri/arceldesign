import React from "react";
import Project from "../components/project";
import { MainLayout } from "../components/layout";
import dental from "../data/dental/dental.json";
import corporate from "../data/corporate.json";
import medical from "../data/medical.json";
import hospitality from "../data/hospitatlity.json";
import residential from "../data/residential.json";
import Image from "next/image";

const Projects = () => {
  return (
    <MainLayout>
      {/* <div className="bg-[#fbfbfb] xl:grid xl:grid-cols-2">
        <Project type="dental" projects={dental} />
        <Project type="corporate" projects={corporate} />
        <Project type="medical" projects={medical} />
        <Project type="hospitality" projects={hospitality} />
        <Project type="residential" projects={residential} />
      </div> */}
      <div className="mt-[500px] grid grid-cols-2 bg-[#fbfbfb]">
        <div className="relative h-[300px] w-[300px]">
          <Image
            fill
            // allows object to fit as a cover instead of filled
            style={{ objectFit: "cover" }}
            src={"/assets/corporate/c1.jpg"}
            alt="corporate"
          />
        </div>
        <div className="relative h-[300px] w-[300px]">
          <Image
            fill
            // allows object to fit as a cover instead of filled
            style={{ objectFit: "cover" }}
            src={"/assets/corporate/c1.jpg"}
            alt="corporate"
          />
        </div>
        <div className="relative h-[300px] w-[300px]">
          <Image
            fill
            // allows object to fit as a cover instead of filled
            style={{ objectFit: "cover" }}
            src={"/assets/corporate/c1.jpg"}
            alt="corporate"
          />
        </div>
        <div className="relative h-[300px] w-[300px]">
          <Image
            fill
            // allows object to fit as a cover instead of filled
            style={{ objectFit: "cover" }}
            src={"/assets/corporate/c1.jpg"}
            alt="corporate"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
