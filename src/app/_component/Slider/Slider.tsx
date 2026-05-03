"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SlideType = {
  image: string;
  title: string;
  button1: {
    text: string;
    link: string;
  };
  button2: {
    text: string;
    link: string;
  };
};

export default function Slider({
  spaceBetween = 0,
  slidesPerView = 1,
  listOfImages,
  heightClass,
}: {
  spaceBetween?: number;
  slidesPerView?: number;
  listOfImages: SlideType[];
  heightClass: string;
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      className={`${heightClass} my-5`}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true , renderBullet(index, className){
        return `<span class="${className} size-4 bg-white!"></span>`;
      },
      // bulletActiveClass :"w-8! h-4! bg-white!"
      }}

    >
      {listOfImages.map((item, index) => (
  <SwiperSlide key={index}>
    
    <div className="relative w-full h-full overflow-hidden">


      <img
        className="w-full h-full object-cover"
        src={item.image}
        alt="slide"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 via-green-400/50 to-transparent"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-green-500/20"></div>

      <div className="absolute top-20 left-12 md:left-40 xl:left-12 text-white space-y-4">

        <h2 className="text-[30px] font-bold my-10 break-words">
          {item.title}
        </h2>

        <div className="flex gap-3">

          <a
            href={item.button1.link}
            className="bg-white px-5 py-2 rounded-md text-green-600 font-semibold hover:scale-105 transition"
          >
            {item.button1.text}
          </a>
          <a
            href={item.button2.link}
            className="bg-transparent text-white px-5 py-2 rounded-md font-semibold hover:scale-105 border border-white transition"
          >
            {item.button2.text}
          </a>

        </div>

      </div>

    </div>

  </SwiperSlide>
))}
    </Swiper>
  );
}
