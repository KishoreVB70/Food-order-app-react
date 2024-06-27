import React from 'react'
import AccordianItem from './AccordianItem'

function RestaurantAccordian({title, cards}) {
  return (
    <div className='w-6/12 flex flex-col items-center shadow-lg justify-center  pl-7 p-2 my-4 bg-gray-100 hover:p-3 hover:cursor-pointer hover:shadow-2xl' >
        <div className='w-full text-center flex justify-between ' >
            <h1 className=' font-bold ' >{title} ({cards.length})</h1>
            <span className="text-lg">⏬</span>
        </div>
        {cards.map((c,ind) => <AccordianItem key={ind} card={c} />)}       
    </div>
  )
}

export default RestaurantAccordian