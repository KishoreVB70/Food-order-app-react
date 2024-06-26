import { swiggyCloudinaryImageBase } from "../../utils/constants";

const ResCard = ({data}) =>  {
    const {resName, area, imageId, rating, cuisine, costForTwo } = data;
    return (
        <div className="flex flex-col p-2 m-2 hover:shadow-lg hover:border-black hover:border hover:p-1 w-80 h-auto items-center">
            <h3 className=" font-bold underline " >{resName}</h3>
            <img className="w-72 h-72 py-2 " src={swiggyCloudinaryImageBase + imageId} />
            <h4>Rating: {rating}</h4>  
            <h4>{area}</h4>
            <p>{cuisine}</p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default ResCard;