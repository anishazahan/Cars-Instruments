import React from 'react'

const ProductModal = ({pdDetails,setPdDetails}) => {

    const {img,name,description,price,minimumQuantity,availableQuantity} = pdDetails;

    const inqueryNow = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        setPdDetails(null);
        console.log(name);
    }

  return (
    <div>

<input type="checkbox" id="product-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

   
    <h2 className='font-bold text-center py-3 text-info'>{name}</h2>
    <form onSubmit={inqueryNow}>
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