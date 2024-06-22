const ResCard = ({data}) =>  {
    const {resName, imageUrl, rating, cuisine, costForTwo } = data;
    return (
        <div className="res-card">
            <h3 className="res-name" >{resName}</h3>
            <img className="res-img" src={imageUrl} />
            <h4>Rating: {rating}</h4>  
            <h4>RS Puram</h4>
            <p>{cuisine}</p>
            <p>20 Km</p>
            <p>45 mins</p>
            <p>Cost for two: {costForTwo}</p>
        </div>
    )
}

export default ResCard;