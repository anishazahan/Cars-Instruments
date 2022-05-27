import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
// Slider Img
import slider_1 from "../../assets/car.png";
import slider_2 from "../../assets/home_slider/slide_img_2.jpeg";


const Banner = () => {
  return (
    <section>
     <img src={slider_2} alt="" />
    </section>
  );
};

export default Banner;
