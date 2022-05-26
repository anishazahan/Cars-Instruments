import React from 'react'

const ProductModal = ({pdDetails}) => {

    const {img,name,description,price,minimumQuantity,availableQuantity} = pdDetails;
  return (
    <div>

<input type="checkbox" id="product-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="product-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

    <div className="flex flex-row">
        <img className='w-40 h-40' src={img} alt="" />
        <div className="ml-5">
            <h2 className='font-bold'>{name}</h2>
            <h2 className=''>{description}</h2>
            <p className=''> MinimumQuantity: {minimumQuantity}</p>
             <p className=''>AvailableQuantity: {availableQuantity}</p>
             <p>Price: <span className='text-3xl font-semibold'>{price}</span> $</p>
        </div>
    </div>
  
    <div class="modal-action">
      <button className='bg-black py-2 text-gray-200 px-3 rounded-md font-medium'> <small className='font-bold'>Send Inquery Now</small> </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductModal