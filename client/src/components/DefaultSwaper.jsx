import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


export default function App() {
  return (
    <>
      <Swiper className="mySwiper rounded-md shadow-lg">
        <SwiperSlide className="bg-red-400">
          <img
            src="https://www.bigbasket.com/media/uploads/banner_images/B2C071812062-23467-1aug24.jpg?tr=w-1920,q=80"
            alt="slider1"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
