import React from "react";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useReviews from "../../Hooks/useReviews";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <section className="text-center p-10">
      <h2 className="text-3xl text-center font-bold text-white py-5">
        Clients Reviews
      </h2>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review._id}>
              <div className="p-10 bg-secondary shadow">
                <p title={review.text} className="text-white text-left">{review.text.slice(0, 200)}</p>
                <div className="flex justify-start items-center my-5">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={review.img} alt="" />
                    </div>
                  </div>
                  <div className="ml-5 text-white font-bold text-left">
                    <h4 className="text-xl text-primary">{review.name}</h4>
                    <h5>{review.city}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default Reviews;
