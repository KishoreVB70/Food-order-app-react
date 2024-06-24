import React from 'react'
import { swiggyCloudinaryImageBase } from '../../utils/constants';

const MenuCard = ({data}) => {
  const {name, imageId, ratings, defaultPrice, price} = data;
  const rating = ratings.aggregatedRating.rating
  return (
      <div className="res-card">
          <h3 className="res-name" >{name}</h3>
          <img className="res-img" src={swiggyCloudinaryImageBase + imageId} />
          <h4>Rating: {rating?rating:"No rating"}</h4>  
          <p>Price: Rs.{defaultPrice?defaultPrice/100:price/100}</p>
      </div>
  )
}

export default MenuCard