import React from "react";
import Carousel from "../components/carousel";
import CarouselItem from "../components/carousel-item";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <Carousel className=" text-white lg:py-10">
        <CarouselItem index={0}>
          <Image
            src="/assets/home/home1.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={1}>
          <Image
            src="/assets/home/home2.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={2}>
          <Image
            src="/assets/home/home3.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={3}>
          <Image
            src="/assets/home/home3.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
      </Carousel>

      <Carousel className=" text-white lg:py-10">
        <CarouselItem index={0}>
          <Image
            src="/assets/home/home1.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={1}>
          <Image
            src="/assets/home/home2.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={2}>
          <Image
            src="/assets/home/home3.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={3}>
          <Image
            src="/assets/home/home3.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
      </Carousel>

      <Carousel className="text-white lg:py-10">
        <CarouselItem index={0}>
          <Image
            src="/assets/home/home1.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={1}>
          <Image
            src="/assets/home/home2.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={2}>
          <Image
            src="/assets/home/home3.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={3}>
          <Image
            src="/assets/home/home3.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
      </Carousel>

      <Carousel className="text-white lg:py-10">
        <CarouselItem index={0}>
          <Image
            src="/assets/home/home1.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={1}>
          <Image
            src="/assets/home/home2.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={2}>
          <Image
            src="/assets/home/home3.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
        <CarouselItem index={3}>
          <Image
            src="/assets/home/home3.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default Projects;
