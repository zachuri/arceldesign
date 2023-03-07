import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import AboutDesign from "../../components/project-layout/about-design";
import Contact from "../../components/project-layout/contact";
import MastHead from "../../components/project-layout/mast-head";

const COPLH = () => {
  return (
    <main>
      <MastHead />
      <AboutDesign />
      <Contact />
    </main>
  );
};

export default COPLH;
