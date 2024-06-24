import React from 'react'
import { swiggyCloudinaryImageBase } from '../../utils/constants';

const MenuCard = ({data}) => {
  const {name, ratings, imageId, defaultPrice} = data;
  return (
      <div className="res-card">
          <h3 className="res-name" >{name}</h3>
          <img className="res-img" src={swiggyCloudinaryImageBase + imageId} />
          <h4>Rating:</h4>  
          <p>{defaultPrice}</p>
      </div>
  )
}

export default MenuCard