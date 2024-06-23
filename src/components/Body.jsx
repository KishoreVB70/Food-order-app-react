import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { swiggyAPI } from "../../utils/constants"



const Body = ( {resData} ) => {
    // State variable
    const [restData, setResData] = useState(resData);

    const bot = () => {
        setResData( (data) => resData.filter(res => res.rating > 4.2));
    } 

    const fetchRestaurants = async() => {
        const data = await fetch(swiggyAPI);
        const jsonData = await data.json();
        const restaurants = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        console.log(restaurants);
        const streamlinedRestaurants = restaurants.map((res) => {
            const {name, areaName, avgRating, cloudinaryImageId, costForTwo, cuisines} = res.info;
            return {
                name: name,
                area: areaName,
                rating: avgRating,
                imageId: cloudinaryImageId,
                costForTwo: costForTwo,
                cuisine: cuisines[0]
            };
        });
        console.log(streamlinedRestaurants);

    }

    // Will be called after the component is rendered
    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (
        <div className="body" >
            <div className="filter">
                <button className="rated-btn" onClick={bot} >Top Rated restaurants</button>
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