import React from "react";
import Carousel from "../carousel";
import Image from "next/image";
import CarouselItem from "../carousel-item";

interface Props {
  type: String;
  images: { src: string; alt: string; desc: string }[];
}

const CarouselImage: React.FC<Props> = ({ images }) => {
  return (
    <Carousel className=" text-white">
      {images.map((image, index) => {
        return (
          // NOTE: carousel needs index -> either manually or index with map
          <CarouselItem index={index} key={index} navigate={""}>
            <Image src={image.src} alt={image.alt} height={500} width={500} />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

export default CarouselImage;
