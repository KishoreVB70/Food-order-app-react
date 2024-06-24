import { swiggyCloudinaryImageBase } from "../../utils/constants";

const ResCard = ({data}) =>  {
    const {resName, area, imageId, rating, cuisine, costForTwo } = data;
    return (
        <div className="res-card">
            <h3 className="res-name" >{resName}</h3>
            <img className="res-img" src={swiggyCloudinaryImageBase + imageId} />
            <h4>Rating: {rating}</h4>  
            <h4>{area}</h4>
            <p>{cuisine}</p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default ResCard;