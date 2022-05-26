import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("product.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  
    return (
      <div className="  py-8">
        <div className="text-center py-8 ">
          <h2 className="text-4xl font-bold">Our Exclusive Products For Your Best Choice!!</h2>
          <p className="font-medium py-5 w-2/3">
          In this section, we focus on offering all models which are available for purchase under their basic specifications. Motory Shop team will constantly update the added categories so that the user can learn more about the car before buying. Also, you can always take a comprehensive look at all types of cars on Motory Shop to choose from the available models.
          </p>
         
        </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-20 pb-32">
              {products.map((product) => (
                  < key={service.id} service={service}></>
              ))}
      </div>
       
      </div>
    );
}

export default Products