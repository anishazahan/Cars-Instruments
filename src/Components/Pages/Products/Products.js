import React, { useEffect, useState } from 'react'
import Product from './Product';

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
          <h2 className="text-4xl font-bold">Our Exclusive Products For <br/><span className='text-info'> Your Best Choice!!</span></h2>
          <p className="font-medium py-5 mx-auto w-2/3">
          In this section, we focus on offering all models which are available for purchase under their basic specifications. Motory Shop team will constantly update the added categories .
          </p>
         
        </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-40 pb-32">
              {products.map((product) => (
                 <Product key={product.id} product={product}></Product>
              ))}
      </div>
       
      </div>
    );
}

export default Products