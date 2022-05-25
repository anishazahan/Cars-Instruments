import React from "react";
import { Link } from "react-router-dom";
import "./HeroBack.css"

const HeroBack = () => {
  return (
   <div className="background-images">
        <div
      class="hero min-h-screen"
     
    >
      <div class="hero-overlay bg-opacity-50"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="">
          <h1 class="mb-5 text-2xl font-bold text-info">Industrial Factory</h1>
          <p class="mb-5 text-5xl font-bold ">The biggest contribution of Ship <br/> industry to Humanity.</p>
          <p class="mb-5 w-1/2 font-medium mx-auto">
          Motory Shop offers you a lot of special car-buying services that cover all types of new and used cars in Saudi Arabia with exclusive prices and other free services for our customers.
          </p>
          <Link to="/" class="btn btn-primary">Read More</Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default HeroBack;
