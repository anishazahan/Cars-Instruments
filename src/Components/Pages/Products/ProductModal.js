import React from 'react'

const ProductModal = ({pdDetails}) => {

    const {img,name,description,price,minimumQuantity,availableQuantity} = pdDetails;
  return (
    <div>

<input type="checkbox" id="product-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

    {/* <div className="flex flex-row">
        <img className='w-40 h-40' src={img} alt="" />
        <div className="ml-5">
            <h2 className='font-bold'>{name}</h2>
            <h2 className=''>{description}</h2>
            <p className=''> MinimumQuantity: {minimumQuantity}</p>
             <p className=''>AvailableQuantity: {availableQuantity}</p>
             <p>Price: <span className='text-3xl font-semibold'>{price}</span> $</p>
        </div>
    </div> */}
    <h2 className='font-bold text-center py-3 text-info'>{name}</h2>
    <form>
    <input type="text"  placeholder='Your Name' className='form-control w-full py-2 px-4 font-medium my-3 input-bordered'/>
    <input type="text"  placeholder='Your Email' className='form-control w-full py-2 px-4 font-medium my-3  input-bordered'/>
    <input type="text"  placeholder='Your Phone Number' className='form-control w-full py-2 px-4 font-medium my-3  input-bordered'/>
    <textarea rows="6" cols="4" className='form-control w-full py-2 px-4 font-medium my-3  input-bordered' placeholder='Your Comment'></textarea>
   <input type="submit" value="Submit" className='btn btn-info font-bold' />
        
    </form>
  
   
  </div>
</div>
    </div>
  )
}

export default ProductModal