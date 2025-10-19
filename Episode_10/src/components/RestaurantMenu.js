
import { useParams } from "react-router";
import MenuCard from "./MenuCards";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    return(
        <div>
            <h1>Menu:</h1>
            {resInfo?.map((item)=>{
                return <MenuCard key={item.id} info={item}/>
            })}
        </div>
    )
};

export default RestaurantMenu;