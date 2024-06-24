// Hooks
import { useState, useEffect } from "react";

// Components
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

//Utils
import { swiggyAPI } from "../../utils/constants"
import { Link } from "react-router-dom";

const Body = () => {
    // State variable
    const [restData, setResData] = useState([]);
    const [filteredRestData, setFilteredRestData] = useState([]);
    const [filterBtn, setFilterBtn] = useState("Top rated restaurants");
    const [searchInput, setSearchInput] = useState("");

    const filterRated = () => {
        if ( filterBtn === "Show All" ) {
            setFilteredRestData(restData);
        } else {
            setFilteredRestData( data => restData.filter(res => res.rating > 4.3));
        }

        setFilterBtn( (btn) => {
            if (btn == "Show All") {
                return "Top rated restaurants"
            }
            return "Show All";
        })
    } 

    const search = () => {
        const filteredData = restData.filter(data => {
            let {area, resName} = data;
            area = area.toUpperCase();
            resName = resName.toUpperCase();
            const searcip = searchInput.toUpperCase();

            return area.includes(searcip) 
                || resName.toUpperCase().includes(searcip);
        })

        if(filteredData.length == 0) {
            // Render not found guddubaye
            setFilterBtn("Show All");
        }
        setFilteredRestData(filteredData);
    }

    const fetchRestaurants = async() => {
        const data = await fetch(swiggyAPI);
        const jsonData = await data.json();
        // Optional chaining
        const restaurants = 
            jsonData.data?.cards[4]?.card?.card?.
            gridElements?.infoWithStyle?.restaurants;
        
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
        setFilteredRestData(() => streamlinedRestaurants);
    }

    // Empty dependency array will be called only when page is refreshed
    // Will not be called for state change rerendering
    useEffect(() => {
        fetchRestaurants();
        setFilterBtn("Top rated restaurants");
    }, []);

    return (
        <div className="body" >
            <div className="search">
                <input type="text" className="search-input" 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)}  
                />
                <button className="search-input" onClick={search}  >Search</button>
            </div>
            <div className="filter">
                <button className="rated-btn" onClick={filterRated} >{filterBtn}</button>
            </div>



            {restData.length === 0 
                ? <Shimmer />
                :
                filteredRestData. length === 0
                    ? <h1>No data found</h1>
                    :
                    <div className="res-container">
                        {
                            filteredRestData.map(rest => (
                                <Link to={"/restaurant/"+rest.resId} >
                                    <ResCard key={rest.resId} data={rest} />
                                </Link>
                                
                        ))
                        }
                    </div>
            }
        </div>
    )
}

export default Body;