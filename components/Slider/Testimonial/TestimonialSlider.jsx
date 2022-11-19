import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";
import LeftArrow from "./Arrow/LeftArrow";
import RightArrow from "./Arrow/RightArrow";

const testimonials = [
  {
    image: "/images/home/customer.webp",
    customerName: "Dipendra Paudel",
    rating: 5,
    review:
      "I have been given helpful tips and precisations to keep up my laptop at best. They showed great resilience and contacting in the time being. I can only greatly appreciate their service.",
  },
  {
    image: "/images/home/customer.webp",
    customerName: "Dipendra Paudel",
    rating: 5,
    review:
      "I brought an ancient, broken computer in and within a day they were able to get it working again, the fix was extremely quick and much cheaper than any other computer repair business I've dealt with in the past.",
  },
  {
    image: "/images/home/customer.webp",
    customerName: "Dipendra Paudel",
    rating: 5,
    review:
      "I cannot speak too highly of their ability to communicate clearly and let you know the problem and fix it. They helped me out twice and both times I have found them efficient and knowledgeable. I would certainly recommend them.",
  },
];

const TestimonialSlider = () => {
  const leftArrow = useRef();
  const rightArrow = useRef();

  return (
    <div>
      <div className="lg:mt-4 relative px-10">
        <div
          ref={leftArrow}
          className="swiper-left-arrow absolute top-1/2 left-0 -translate-y-1/2"
        >
          <LeftArrow />
        </div>
        <div
          ref={rightArrow}
          className="absolute top-1/2 right-0 -translate-y-1/2"
        >
          <RightArrow />
        </div>
        <Swiper
          loop={true}
          slidesPerView="auto"
          spaceBetween={30}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
