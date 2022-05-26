import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className=" bg-base-200 py-8">
      <div className="text-center py-8 mt-[50px]">
        <h2 className="text-4xl font-bold">Why Customer Love To Choose Us.</h2>
        <p className="font-medium py-5">
          This service is available for new car owners. It starts when you
         <br/> purchase the car and activate the service.
        </p>
        <p className="font-bold  text-3xl text-info">Services</p>
      </div>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-20 pb-32">
            {services.map((service) => (
                <Service key={service.id} service={service}></Service>
            ))}
    </div>
     
    </div>
  );
};

export default Services;
