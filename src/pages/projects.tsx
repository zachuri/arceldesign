import React from "react";
import Project from "../components/project";
import MainLayout from "../components/layout";

const dentals = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home2.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
];

const corparte = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home2.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
];

const hospitality = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home2.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
];

const residential = [
  { src: "/assets/home/home1.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home2.jpg", alt: "Picture of the author" },
  { src: "/assets/home/home3.jpg", alt: "Picture of the author" },
];

const Projects = () => {
  return (
    <MainLayout>
      <div className="bg-[#fbfbfb]">
        <Project projectType="Dental" projects={dentals} />
        <Project projectType="Corprate" projects={corparte} />
        <Project projectType="hospitality" projects={hospitality} />
        <Project projectType="residential" projects={residential} />
      </div>
    </MainLayout>
  );
};

export default Projects;
