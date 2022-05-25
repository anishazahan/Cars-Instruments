import React from 'react'
import "./Banner.css"
// import car1 from "../../../img/car.png"
// import car2 from "../../../img/car2.png"
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner-background'>
        <div className="banner-img px-12">
            <h2 className='text-5xl mb-6 font-extrabold block text-red-300 align-middle pt-[150px] '>Cars Instruments Distributor with   <br/> <span className='text-info text-4xl mt-3 '> the Best Deals,for your perfect car.</span></h2>
            <p className='text-gray-200 w-1/2 font-medium'>This ultra-luxurious genius will make choosing a premium vehicle much easier as it offers the most stylish arrivals than ever. The R-R Ghost White – 2021 has been built from the ground up, changing the appearance, technology, and overall aura. Being in the car business for so long, we can assure you. </p>
            <Link to="/" className='btn btn-info btn-outline font-bold mt-6'>Explore Now</Link>
            
            
        </div>
        <div className=""></div>
      
        
    </div>
  )
}

export default Banner