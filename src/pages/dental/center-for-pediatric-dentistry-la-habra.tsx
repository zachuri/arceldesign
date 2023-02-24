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
    <main className="mt-40">
      {/* Main Page */}
      <div className="ml-40 mr-40 mt-40 grid grid-cols-2 text-white">
        {/* ===============*/}
        {/* ====  left ====*/}
        {/* ===============*/}
        <div>
          <div className="mb-10 text-[10]">
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
        <div>
          <img
            className="ml-20"
            src={"/assets/dental/dental1/IMG_6566.jpg"}
            alt={"dental 1"}
          />
        </div>

        {/* ===============*/}
        {/* ==== bottom ===*/}
        {/* ===============*/}
        <div>
          <div className="grid grid-cols-2">
            <div className="flex flex-row">
              Gallery
              <div className="mt-2 flex-grow border-t border-gray-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Design */}
      <div></div>
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
