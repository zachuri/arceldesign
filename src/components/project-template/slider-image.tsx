//@ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
  images: { src: string; alt: string; desc: string }[];
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
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, Navigation, EffectFade, Pagination, Scrollbar]}
        navigation={true}
        pagination={true}
        scrollbar={{
          hide: true,
        }}
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image.alt}>
              {/* Solution to safair h-screen*/}
              <div className="h-[300px] md:h-[500px]">
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
