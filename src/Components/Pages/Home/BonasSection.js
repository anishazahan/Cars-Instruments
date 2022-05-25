import React from "react";
import { Link } from "react-router-dom";
// import img1 from "../../../img/images.jpg"
// import img2 from "../../../img/img2.jpg"
// import img3 from "../../../img/images 3.jpg"
import img4 from "../../../img/img4.jpg"
import "./BonasSection.css"

const BonasSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row flex-1">
        <div className="gallary lg:grid-rows-4 lg:flex-row">
            
            <img className="rounded-lg" src={img4} alt="" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mt-[-50px]">Exclusive Feature for lasting your car living!</h1>
          <p className="py-8 font-medium">
          This warranty begins when the manufacturer’s warranty expires. And for a year, you can use the Roadside Assistance Service for free starting from the extended warranty date
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.The bill of lading must include the customer's name, mobile phone number, and the customer's approved destination.The bill of lading must include the customer's name, mobile phone number, and the customer's approved destination.
          </p>
          <Link to="/" className="btn btn-primary font-semibold">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default BonasSection;
