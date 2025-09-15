import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router";
import MenuCard from "./MenuCards";

const RestaurantMenu = () => {
    const [menuList, setMenuList] = useState([]);
    const {resId} = useParams();

    useEffect( () => {
        const fetchMenu = async() => {
            try {
            const fetchList = await fetch(MENU_URL + resId);
            const data = await fetchList.json();
            const list = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            console.log("list: ", list);
            const items = list?.map(item => item?.card?.info) || [];
            setMenuList(items);
            console.log(items);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMenu();
    },[]);

    return(
        <div>
            <h1>Menu:</h1>
            {menuList?.map((item)=>{
                return <MenuCard key={item.id} info={item}/>
            })}
        </div>
    )
};

export default RestaurantMenu;