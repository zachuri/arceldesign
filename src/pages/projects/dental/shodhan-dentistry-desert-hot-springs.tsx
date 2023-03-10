import AboutDesign from "../../../components/project-template/about-design";
import Contact from "../../../components/project-template/contact";
import MastHead from "../../../components/project-template/mast-head";

const images = [
  {
    src: "/assets/dental/dental7/_MG_1229.jpg",
    alt: "dental 7 1",
    desc: "",
  },
  {
    src: "/assets/dental/dental7/_MG_1245.jpg",
    alt: "dental 7 2",
    desc: "",
  },
  {
    src: "/assets/dental/dental7/_MG_1275a.jpg",
    alt: "dental 7 3",
    desc: "",
  },
  {
    src: "/assets/dental/dental7/_MG_1293.jpg",
    alt: "dental 7 4",
    desc: "",
  },
];

const SDDHS = () => {
  return (
    <main> <MastHead
        index={7}
        designInfo={{
          name: "Shodhan Dentistry",
          type: "Dental",
          location: "Desert Hot Springs, California",
          completedYear: "2009",
        }}
        image={"/assets/dental/dental6/RedlandsOffice-1.jpg"}
      />
      <AboutDesign
        index={7}
        designDesc={{
          title: "Modest Red...",
          desc: "Modest accents of rich red color, dispersed throughout the space, promote a \
          consistent richness to the eye in this environment. The dental office embodies an elegant \
          and contemporary design, through its unique use of materials and artwork. Porcelain tiles \
          resembling hardwood flooring, connecting the space together, add a solid and sturdy feel, while adding tranquility through their horizontal layout.",
        }}
        designInfo={{
          name: "Shodan Dentistry",
          type: "Dental",
          client: "Dr. Harin Shodhan, Dr. Keyur Shodhan",
          size: "2165 sq ft / 5 chairs",
          location: "Redlands, CA",
          completedYear: "20011",
        }}
        images={images}
      />
      <Contact />
    </main>
  );
};

export default SDDHS;
