import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Keyboard, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { IoIosArrowDropright } from "react-icons/io";

const COPLH = () => {
  return (
    <main>
      <div className="mt-[250px] h-full w-full">
        {/* Main Page */}
        <div className="ml-40 mr-40 grid grid-cols-2 text-white">
          {/* ===============*/}
          {/* ====  left ====*/}
          {/* ===============*/}
          <div>
            <div className="ml-2 mb-5 text-[10]">
              <div>Corporate Design</div>
              <div>2014</div>
            </div>
            <div className="text-9xl">NOVA WORLD, INC</div>
            <div className="mt-16 grid grid-cols-2">
              <IoIosArrowDropright size="120"></IoIosArrowDropright>
              <div className="flex flex-row-reverse">
                <div className="flex flex-col-reverse">
                  <div className="font-extralight">San Dimas, California</div>
                  <div className="font-bold">Location</div>
                </div>
              </div>
            </div>
          </div>
          {/* ===============*/}
          {/* ==== right ====*/}
          {/* ===============*/}
          <img
            className="ml-20 object-fill"
            src={"/assets/dental/dental1/IMG_6566.jpg"}
            alt={"dental 1"}
          />
        </div>

        {/* ===============*/}
        {/* ==== bottom ===*/}
        {/* ===============*/}
        <div className="mr-20 mt-10 ml-20 text-white">
          <div className="flex flex-row space-x-10">
            <div className="flex flex-row">
              Gallery
              <div className="mt-3 ml-2 w-10 border-t-2 border-gray-400"></div>
            </div>
            <div className="flex flex-row">
              Similar Projects
              <div className="mt-3 ml-2 w-10 border-t-2 border-gray-400"></div>
            </div>
          </div>

          <div className="border-b-1 mt-5 mb-5 flex-grow border-t-2 border-white"></div>

          <div className="flex-cols-2 mb-10 flex text-sm">
            <div className="left-0 flex flex-col">
              <div className="font-bold">Corporate Collections</div>
              <div className="font-light">Collection 01</div>
            </div>
            <div className="absolute right-0 mr-20 flex flex-col">
              <div className="font-bold">Creative Design</div>
              <div className="font-light">Nova World, Inc</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Design */}
      <div className="h-full w-full bg-white">
        <div className="ml-20 mr-20">
          <div className="grid grid-cols-2">
            <div className="mt-10 flex flex-row">
              <div className="mt-1.5 h-3.5 w-3.5 rounded-full bg-black"></div>
              <div className="text-xl font-bold">ABOUT DESIGN</div>
            </div>
            <div className="left-0 mt-10 flex flex-col text-sm">
              <div className="font-bold">Corporate Collections</div>
              <div className="font-light">Collection 01</div>
            </div>
          </div>
          <div className="border-b-1 mt-5 mb-5 flex-grow border-t-2 border-black"></div>
        </div>
      </div>
    </main>
  );
};

export default COPLH;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
// import { Keyboard, Pagination } from "swiper";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// interface Props {
//   title: string;
//   adjective: string;
//   description: string;
//   client: string;
//   location: string;
//   squareFeet: string;
//   yearOfCompletion: string;
// }

// function ProjectDetail({
//   title,
//   adjective,
//   description,
//   client,
//   location,
//   squareFeet,
//   yearOfCompletion,
// }: Props) {
//   return (
//     <>
//       {/* Title */}{" "}
//       <div className="flex w-[500px] flex-col space-y-5 text-white">
//         <h1 className="text-2xl">{title}</h1>
//         <h2 className="text-xl">
//           {adjective}... <span className="text-lg">{description}</span>
//         </h2>
//         <h2 className="text-xl">
//           Client: <span className="text-lg">{client}</span>
//         </h2>
//         <h2 className="text-xl">
//           Location: <span className="text-lg">{location}</span>
//         </h2>
//         <h2 className="text-xl">
//           Square Footage: <span className="text-lg">{squareFeet}</span>
//         </h2>
//         <h2 className="text-xl">
//           Year of Completion:{" "}
//           <span className="text-lg">{yearOfCompletion}</span>
//         </h2>
//       </div>
//     </>
//   );
// }

// const COPLH = () => {
//   const description =
//     "Modern contemporary style, structure, and form combine harmoniously for this dental practice, creating an attractively ideal space, one minimal and therapeutic.";

//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         keyboard={{
//           enabled: true,
//         }}
//         pagination={{
//           clickable: true,
//         }}

//         navigation={true}
//         modules={[Keyboard, Pagination, Navigation]}
//       >
//         <SwiperSlide>
//           <img src={"/assets/dental/dental1/IMG_6566.jpg"} alt={"dental 1"} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={"/assets/dental/dental1/IMG_6567.jpg"} alt={"dental 1"} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={"/assets/dental/dental1/IMG_6568.jpg"} alt={"dental 1"} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={"/assets/dental/dental1/IMG_6569.jpg"} alt={"dental 1"} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={"/assets/dental/dental1/IMG_6570.jpg"} alt={"dental 1"} />
//         </SwiperSlide>
//       </Swiper>

//       <ProjectDetail
//         title={"Comfort Dental"}
//         client={"Julian Nguyen, DDS, MS"}
//         description={description}
//         adjective={"Modern Comfort"}
//         location={"Pasadena, California"}
//         squareFeet={"1500 sq ft | 4 Chairs"}
//         yearOfCompletion={"2013"}
//       />
//     </>
//   );
// };

// export default COPLH;
