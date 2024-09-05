import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import ProductBox from "./ProductBox";
import { Link } from "react-router-dom";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "@remixicon/react";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../store/Auth";
import axios from "axios";

export default function Basket({ name }) {
  const swiperRef = useRef(null);
  // const { data } = useAuth();

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "http://localhost:3000/api/product/all-products",
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="my-5 bg-slate-200 px-7 py-5 overflow-hidden rounded-md">
      <div className="ml-4 mb-3 flex justify-between items-center ">
        <h1 className="font-bold text-xl">{name}</h1>
        <div className="flex items-center gap-3">
          <Link className="underline" to={"#"}>
            View All
          </Link>
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="bg-gray-100 p-1.5 rounded"
          >
            <RiArrowLeftWideLine />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="bg-gray-100 p-1.5 rounded"
          >
            <RiArrowRightWideLine />
          </button>
        </div>
      </div>
      <div className="h-full rounded-md">
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          freeMode={true}
          simulateTouch={false}
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper bg-slate-200 px-5 pb-10 overflow-hidden rounded"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-58 h-full border shadow-md p-2.5  rounded-md ">
                <ProductBox {...item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
