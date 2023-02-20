import React from "react";
import Project from "../components/project";
import MainLayout from "../components/layout";
import dental from "../data/dental.json";
import corporate from "../data/corporate.json";
import medical from "../data/medical.json";
import hospitality from "../data/hospitatlity.json";
import residential from "../data/residential.json";

const Projects = () => {
  return (
    <MainLayout>
      <div className="bg-[#fbfbfb] xl:grid xl:grid-cols-2">
        <Project type="dental" projects={dental} />
        <Project type="corporate" projects={corporate} />
        <Project type="medical" projects={medical} />
        <Project type="hospitality" projects={hospitality} />
        <Project type="residential" projects={residential} />
      </div>
    </MainLayout>
  );
};

export default Projects;
