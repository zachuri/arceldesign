//@ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlurhashCanvas } from "react-blurhash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

import {
  Autoplay,
  Navigation,
  EffectFade,
  Pagination,
  Scrollbar,
} from "swiper";
import Image from "next/image";

interface Props {
  images: { src: string; alt: string; desc: string; hash: string }[];
}

const SliderImage: React.FC<Props> = ({ images }) => {
  return (
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
        spaceBetween={10}
        loop={true}
        // effect="fade"
        // fadeEffect={{ crossFade: true }}
        modules={[Autoplay, Navigation, EffectFade, Pagination, Scrollbar]}
        navigation={true}
        pagination={true}
        breakpoints={{
          486: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },

          534: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },

          534: {
            slidesPerView: 1.04,
            spaceBetween: 10,
          },

          908: {
            slidesPerView: 1.05,
            spaceBetween: 10,
          },

          938: {
            slidesPerView: 1.25,
            spaceBetween: 10,
          },

          1154: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },

          1286: {
            slidesPerView: 1.75,
            spaceBetween: 10,
          },

          1464: {
            slidesPerView: 1.85,
            spaceBetween: 10,
          },

          1532: {
            slidesPerView: 1.95,
            spaceBetween: 10,
          },

          1622: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1850: {
            slidesPerView: 2.1,
            spaceBetween: 10,
          },

          2250: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          2500: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },

          3000: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        scrollbar={{
          hide: true,
        }}
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image.alt}>
              {/* Solution to safair h-screen*/}
              <div className="h-[300px] md:h-[500px]">
                <BlurhashCanvas
                  hash={image.hash}
                  width={32}
                  height={32}
                  punch={1}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
                <Image
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={100}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderImage;
