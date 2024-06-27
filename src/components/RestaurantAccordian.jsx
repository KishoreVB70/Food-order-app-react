import React from 'react'
import AccordianItem from './AccordianItem'

function RestaurantAccordian({title, cards, restaurantImage, show, setShow}) {
    const handleClick = () => {
        setShow();
    }

  return (
    <div className='w-6/12 flex flex-col items-center shadow-md justify-center  hover:shadow-xl pl-7 p-2 my-4 bg-gray-100' >
        <div className='w-full text-center   hover:cursor-pointer h-full flex justify-between ' onClick={handleClick} >
            <h1 className=' font-bold ' >{title} ({cards.length})</h1>
            <span className="text-lg">⏬</span>
        </div>
        {show && cards.map((c,ind) => <AccordianItem key={ind} restaurantImage={restaurantImage} card={c} />)}
    </div>
  )
}

export default RestaurantAccordian