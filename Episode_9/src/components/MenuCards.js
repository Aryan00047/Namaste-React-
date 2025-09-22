import { CDN_URL } from "../utils/constants";

const MenuCard = ({info}) => {
    return (
        <div className="menu-card">
                <h1>{info.name}</h1>
                <img className="menu-img" src={CDN_URL + info.imageId} alt={info?.name}/>
                <p>{info.description}</p>
                <h3>Cost: Rs {info?.price/100 || info?.defaultPrice/100}</h3>
                <h3>Rating: {info?.ratings?.aggregatedRating?.rating}</h3>
        </div>
    )
}

export default MenuCard;