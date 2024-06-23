import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { swiggyAPI } from "../../utils/constants"



const Body = ( {resData} ) => {
    // State variable
    const [restData, setResData] = useState([]);

    const filterRated = () => {
        setResData( (data) => restData.filter(res => res.rating > 4.2));
    } 

    const fetchRestaurants = async() => {
        const data = await fetch(swiggyAPI);
        const jsonData = await data.json();
        const restaurants = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        console.log(restaurants);
        const streamlinedRestaurants = restaurants.map((res) => {
            const {name, id, areaName, avgRating, cloudinaryImageId, costForTwo, cuisines} = res.info;
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
        console.log(streamlinedRestaurants);

    }

    // Will be called after the component is rendered
    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (
        <div className="body" >
            <div className="filter">
                <button className="rated-btn" onClick={filterRated} >Top Rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    restData.map(rest => (<ResCard key={rest.resId} data={rest} />))
                }
            </div>
        </div>
    )
}

export default Body;