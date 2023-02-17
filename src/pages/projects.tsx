import React from "react";
import Project from "../components/project";
import MainLayout from "../components/layout";
import dental from "../data/dental.json";

const Projects = () => {
  return (
    <MainLayout>
      <div className="bg-[#fbfbfb]">
        <Project projectType="Dental" projects={dental} />
        <Project projectType="Dental" projects={dental} />
        <Project projectType="Dental" projects={dental} />
        <Project projectType="Dental" projects={dental} />
      </div>
    </MainLayout>
  );
};

export default Projects;
