import { swiggyCloudinaryImageBase } from "../../utils/constants";

const ResCard = ({data}) =>  {
    const {resName, areaName, imageId, rating, cuisine, costForTwo } = data;
    return (
        <div className="res-card">
            <h3 className="res-name" >{resName}</h3>
            <img className="res-img" src={swiggyCloudinaryImageBase + imageId} />
            <h4>Rating: {rating}</h4>  
            <h4>{areaName}</h4>
            <p>{cuisine}</p>
            <p>20 Km</p>
            <p>45 mins</p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default ResCard;