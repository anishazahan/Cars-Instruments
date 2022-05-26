import React from "react";

const Review = (props) => {
    const {img,name,description}= props.review;
  return (
    <div className=" bg-base-200 p-10 rounded-md">
      <div className="flex flex-row">
       <div className="avater w-1/2 rounded-lg h-full ring ring-info ring-offset-base-100 ring-offset-2">
           <img className="rounded-lg" src={img} alt="" />
       </div>
        <p className="pl-5 font-medium tracking-tighter">{description}</p>
      </div>
      <p className="text-right font-bold text-neutral">{name}</p>
    </div>
  );
};

export default Review;
