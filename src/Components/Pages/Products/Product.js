import React from 'react'

const Product = ({product,setPdDetails}) => {

    const {img,name,description,price,minimumQuantity,availableQuantity}=product;
  return (
    <div class=" bg-base-100 w-80 shadow-xl mx-auto mb-12 w-full">
    <div className="w-80 h-60">
    <img className='h-full w-full' src={img} alt="Shoes" />
    </div>
    <div class="p-5">
      <h2 class="card-title font-bold">{name}</h2>
      <p className='font-medium py-3'> {description}</p>
      <p className=''> MinimumQuantity:{minimumQuantity}</p>
      <p className=''>AvailableQuantity:{availableQuantity}</p>
      
      </div>
      <div class="card-actions justify-around align-bottom p-3">
      <p>Price: <span className='text-3xl font-semibold'>{price}</span> $</p>
       
        <label for="product-modal" onClick={() => setPdDetails(product)} class="bg-black p-2 text-gray-200 px-4 rounded-md font-medium"><small className='font-bold'>Send Inquery Now</small></label>
        
    </div>
  </div>
  )
}

export default Product