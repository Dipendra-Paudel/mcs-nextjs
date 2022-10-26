import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServiceCard from "../Common/Card/ServiceCard";
import { bestServices } from "../../utils/services";
import swiperSettings from "../../utils/swiperSettings";
import ViewAllCard from "../Common/Card/ViewAllCard";

const BestServices = () => {
  const leftArrow = useRef();
  const rightArrow = useRef();

  useEffect(() => {
    const defualtNextButton = document.querySelector(".swiper-button-next");
    const defaultPrevButton = document.querySelector(".swiper-button-prev");

    defaultPrevButton && (defaultPrevButton.style.display = "none");
    defualtNextButton && (defualtNextButton.style.display = "none");
  }, []);

  return (
    <div className="px-6 pb-12 md:px-8 md:pb-16 lg:px-16 lg:pb-20">
      <div className="common-style-2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="flex-1 text-center lg:text-left font-bold text-2xl md:text-3xl text-gray-800">
            Best Services
          </h2>
          <div className="hidden lg:flex items-center space-x-2">
            <button
              className="hover:bg-gray-200 transition-all duration-300 w-8 h-8 p-1 cursor-pointer border"
              ref={leftArrow}
            >
              <img
                src="/icons/slider-arrow.png"
                alt=""
                className="w-full h-full rotate-180"
              />
            </button>
            <button
              className="hover:bg-gray-200 transition-all duration-300 w-8 h-8 p-1 cursor-pointer border"
              ref={rightArrow}
            >
              <img
                src="/icons/slider-arrow.png"
                alt=""
                className="w-full h-full"
              />
            </button>
          </div>
        </div>

        <div className="flex">
          <Swiper
            {...swiperSettings}
            navigation={{
              prevEl: leftArrow.current,
              nextEl: rightArrow.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = leftArrow.current;
              swiper.params.navigation.nextEl = rightArrow.current;
            }}
            modules={[Autoplay, Navigation]}
          >
            {bestServices.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <ViewAllCard link="/services" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestServices;
