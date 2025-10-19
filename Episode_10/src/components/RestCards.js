import { CDN_URL } from "../utils/constants";

const RestCards = ({info}) => {
    const {name, locality, cuisines =[], cloudinaryImageId, avgRating, sla} = info;

    const getRatingColor = (rating) => {
        if(rating >=4){
            return "text-green-400";
        }else if(rating >=3 && rating <4){
            return "text-yellow-400";
        }else{
            return "text-red-400";
        }
    }

    const getDelieveryTimeColor = (deliveryTime) => {
        if(deliveryTime <=30){
            return "text-green-600";
        }else if(deliveryTime >30 && deliveryTime <=45){
            return "text-yellow-600";
        }else{
            return "text-red-600";
        }
    }
    
    return(
        <div className="m-4 p-4 w-[250px] h-[350px] rounded-xl shadow-md shadow-black-200 bg-gray-100 hover:bg-gray-200 flex flex-col justify-between">
            <img className="w-full h-40 rounded-lg object-cover" alt={name} src={CDN_URL+`${cloudinaryImageId}`}/>
            <div>
            <h3 className="font-bold py-4 text-lg truncate">{name}</h3>
            <h4 className="text-gray-700 text-sm line-clamp-2">{cuisines.join(", ")}</h4>
            <div className="flex justify-between items-center mt-2">
                <h4 className="text-blue-500">{locality}</h4>
                <h4 className={getRatingColor(avgRating)}>{avgRating ?? 'N/A'}</h4>
            </div>
            <h4 className={`${getDelieveryTimeColor(sla.deliveryTime)} mt-1`}>🚚{sla.deliveryTime}min</h4>
            </div>
        </div>
    )
}

export default RestCards;