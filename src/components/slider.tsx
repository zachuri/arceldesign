//@ts-nocheck
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/carousel.module.css";

const images = [
  {
    src: "/assets/home/home1.jpg",
    alt: "home 1",
    href: "/hospitality",
    type: "Hospitality",
  },
  {
    src: "/assets/home/home2.jpg",
    alt: "home 2",
    href: "/dental",
    type: "Dental",
  },
  {
    src: "/assets/home/home3.jpg",
    alt: "home 3",
    href: "/medical",
    type: "Medical",
  },
  // {
  //   src: "/assets/home/home3.jpg",
  //   alt: "home 3",
  //   href: "/residential",
  //   type: "Residential",
  // },
  // {
  //   src: "/assets/home/home3.jpg",
  //   alt: "home 3",
  //   href: "/corporate",
  //   type: "Corporate",
  // },
];

const Slider = () => (
  <>
    <Swiper
      style={{
        "--swiper-navigation-color": "gray",
        "--swiper-navigation-size": "35px",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      modules={[Autoplay, Navigation, EffectFade]}
      navigation={true}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image.alt}>
            {/* Solution to safair h-screen*/}
            <div className="h-screen w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
            </div>

            <div className="fixed bottom-0 z-[100] hidden p-10 md:flex">
              <div
                style={{ letterSpacing: 10 }}
                className="bg-[#282928] p-2 font-light"
              >
                <h2 className="px-2 text-xl uppercase text-[#838383]">
                  <Link href={image.href}>
                    Projects /{" "}
                    <span className="text-[#D8D7D4]">{image.type}</span>
                  </Link>
                </h2>
              </div>
            </div>

            {/* Smaller Screen */}
            <div className="fixed bottom-0 w-full md:hidden">
              <div
                style={{ letterSpacing: 10 }}
                className="bg-[#282928] font-light "
              >
                <h2 className="p-2 text-sm uppercase text-[#838383]">
                  <Link href={image.href}>
                    Projects /{" "}
                    <span className="text-[#D8D7D4]">{image.type}</span>
                  </Link>
                </h2>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </>
);

export default Slider;
