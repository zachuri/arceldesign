import React from "react";
import Project from "../components/project";

const dentals = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home2.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home2.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
];

const Projects = () => {
  return (
    <div className="bg-[#fbfbfb]">
      <Project projectType="Dental" projects={dentals} />
    </div>
  );
};

export default Projects;
