import React from "react";
import Project from "../components/project";
import MainLayout from "../components/layout";
import dental from "../data/dental.json";
import corporate from "../data/corporate.json";
import medical from "../data/medical.json";

const Projects = () => {
  return (
    <MainLayout>
      <div className="bg-[#fbfbfb]">
        <Project projectType="Dental" projects={dental} />
        <Project projectType="Corporate" projects={corporate} />
        <Project projectType="Medical" projects={medical} />
      </div>
    </MainLayout>
  );
};

export default Projects;
