import { useEffect, useState } from "react";
import { swiggyAPI } from "../utils/constants";
const useRestaurant = () => {
    const [restData, setResData] = useState(null);

    useEffect(() => {
        fetchRestaurant();
    }, [])

    const fetchRestaurant = async() => {
        try {
            const data = await fetch(swiggyAPI);
            const jsonData = await data.json();
    
            // Optional chaining
            const restaurants = 
                jsonData.data?.cards[4]?.card?.card?.
                gridElements?.infoWithStyle?.restaurants;
            
            const streamlinedRestaurants = restaurants.map((res) => {
                const {
                    name, id, areaName, avgRating, 
                    cloudinaryImageId, costForTwo, cuisines
                } = res.info;
    
                return {
                    resId: id,
                    resName: name,
                    area: areaName,
                    rating: avgRating,
                    imageId: cloudinaryImageId,
                    costForTwo: costForTwo,
                    cuisine: cuisines[0]
                };
            });
            
            setResData(() => streamlinedRestaurants);
        }catch(error) {
            console.log(error);
        }
    }

    return restData;
}

export default useRestaurant;