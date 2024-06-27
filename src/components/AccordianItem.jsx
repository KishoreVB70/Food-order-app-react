import React from 'react'
import { swiggyCloudinaryImageBase } from '../utils/constants';


function AccordianItem({card, restaurantImage}) {
    const info = card.card.info

  return (
    <div className=' w-full mb-3 m-2 p-2 flex flex-row items-center justify-between text-left border-b-2' > 
        <div className='flex flex-col w-3/4' >
            <h1  className='mr-4' >{info.name}</h1>
            <h1>Rs.{info.price?info.price/100:info.defaultPrice/100}</h1>
            <p className='mb-1 mt-4 text-gray-400 w-3/4 '>{info?.description}</p>
        </div>

        <div className='flex flex-coljustify-center relative items-center h-full w-1/4' >
            <button className='absolute bg-gray-400 opacity-80  hover:opacity-100 hover:bg-gray-700  p-1 w-14 h-8  right-16 bottom-20 rounded-lg text-white' >Add +</button>
            {info.hasOwnProperty('imageId')
                ?<img className='object-cover h-28 rounded-md w-28' src={swiggyCloudinaryImageBase + info?.imageId} />
                :<img className='object-cover h-28 rounded-md w-28' src={swiggyCloudinaryImageBase + restaurantImage} />
            }
        </div>
    </div>
  )
}

export default AccordianItem