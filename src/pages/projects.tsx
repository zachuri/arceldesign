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
      <div className="bg-[#fbfbfb]">
        <Project projectType="Dental" projects={dental} />
        <Project projectType="Corporate" projects={corporate} />
        <Project projectType="Medical" projects={medical} />
        <Project projectType="Hospitality" projects={hospitality} />
        <Project projectType="Residential" projects={residential} />
      </div>
    </MainLayout>
  );
};

export default Projects;
