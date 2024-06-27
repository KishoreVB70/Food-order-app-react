import React from 'react'
// import { swiggyCloudinaryImageBase } from '../../utils/constants.js';

function AccordianItem({card}) {
    const info = card.card.info
    console.log(info);

  return (
    <div className=' w-full mb-3 m-2 text-left border-b-2' >
        <div className='flex '>
            <h1 className='mr-4' >{info.name}</h1>
            <h1>Rs.{info.price/100}</h1>
        </div>
        <p>{info.description}</p>
    </div>
  )
}

export default AccordianItem