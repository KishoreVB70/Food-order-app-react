// Hooks
import { useState} from "react";
import useRestaurant from "../../hooks/useRestaurant";
import useOnlineStatus from "../../hooks/useOnlineStatus";

// Components
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

//Utils
import { Link } from "react-router-dom";


const Body = () => {
    // State variable
    const [filteredRestData, setFilteredRestData] = useState(null);
    const [filterBtn, setFilterBtn] = useState("Top rated restaurants");
    const [searchInput, setSearchInput] = useState("");

    const restData = useRestaurant();
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>You are offline, please check your connectivity</h1>
    }

    // For the first render
    if (restData !== null && filteredRestData === null) {
        setFilteredRestData(restData);
    }

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

        setFilterBtn("Show All");
        
        setFilteredRestData(filteredData);
    }

    return (
        <div className="body" >
            <div className="search">
                <input type="text" className="search-input" 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)}  
                />
                <button className="search-input" onClick={search} >Search</button>
            </div>
            <div className="filter">
                <button className="rated-btn" onClick={filterRated} >{filterBtn}</button>
            </div>



            {restData === null 
                ? <Shimmer />
                :
                filteredRestData === null
                    ? <h1>No data found</h1>
                    :
                    <div className="res-container">
                        {
                            filteredRestData.map(rest => (
                                <Link key={rest.resId} to={"restaurant/"+rest.resId} >
                                    <ResCard data={rest} />                        
                                </Link>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Body;