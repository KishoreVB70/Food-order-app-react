import React from 'react'
import { swiggyCloudinaryImageBase } from '../../utils/constants';

const MenuCard = ({data}) => {
  const {name, imageId, ratings, defaultPrice, price} = data;
  const rating = ratings.aggregatedRating.rating
  return (
      <div className="flex flex-col p-2 m-2 hover:border-black hover:cursor-pointer hover:border hover:p-1 w-80 items-center text-center">
          <h3 className="underline" >{name}</h3>
          <img className="w-72 h-72 py-2 " src={swiggyCloudinaryImageBase + imageId} />
          <h4>Rating: {rating?rating:"None"}</h4>  
          <p>Price: Rs.{defaultPrice?defaultPrice/100:price/100}</p>
      </div>
  )
}

export default MenuCard