import { CDN_URL } from "../utils/constants";

const RestCards = ({info}) => {
    const {name, locality, cuisines =[], cloudinaryImageId, avgRating, sla} = info;
    return(
        <div className="res-container">
            <img className="res-img" alt={name} src={CDN_URL+`${cloudinaryImageId}`}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{avgRating ?? 'N/A'}</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}

export default RestCards;