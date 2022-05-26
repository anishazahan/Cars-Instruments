import React, { useEffect, useState } from 'react'
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(() => {
      fetch("review.json")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
  
    return (
      <div className=" bg-slate-900 py-8 ">
        <div className="text-center py-8 mt-5 text-gray-300">
          <h2 className="text-4xl font-bold mb-5">Our Client Says.</h2>
          
        </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 px-12 pb-20">
              {reviews.map((review) => (
                <Review key={review.id} review={review}></Review>
              ))}
      </div>
       
      </div>
    );
}

export default Reviews