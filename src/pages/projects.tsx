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

const corprate = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
];

const medical = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
];

const hospitality = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
];

const residential = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
];

const Projects = () => {
  return (
    <div className="bg-[#fbfbfb]">
      <Project projectType="Dental" projects={dentals} />
      <Project projectType="Corprate" projects={corprate} />
      <Project projectType="hospitality" projects={hospitality} />
      <Project projectType="residential" projects={residential} />
    </div>
  );
};

export default Projects;
