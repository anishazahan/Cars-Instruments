import React from 'react'

const Service = (props) => {
    const{name,description}= props.service
  return (
    <div className=' bg-white p-6 text-center rounded-md'>
        <h2 className='font-bold text-2xl text-info py-4'>{name}</h2>
        <p className='font-medium mb-3'>{description}</p>
    </div>
  )
}

export default Service