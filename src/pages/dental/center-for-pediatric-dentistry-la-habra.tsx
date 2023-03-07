import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Keyboard, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { IoIosArrowDropright, IoIosArrowRoundForward } from "react-icons/io";

import Image from "next/image";
import MastHead from "../../components/project-layout/mast-head";
import AboutDesign from "../../components/project-layout/about-design";
import Contact from "../../components/project-layout/contact";

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
