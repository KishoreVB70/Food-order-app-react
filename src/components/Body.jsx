import ResCard from "./ResCard";
import { useState } from "react";



const Body = ( {resData} ) => {
    // State variable
    const [restData, setResData] = useState(resData);

    const bot = () => {
        setResData( (data) => resData.filter(res => res.rating > 4.2));
    } 

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