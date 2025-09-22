import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);

    useEffect( ()=> {
        const fetchInfo = async () => {
         const res = await fetch(MENU_URL+ resId);
         const data = await res.json();
         //  const list = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
         const groupedCard = data?.data?.cards?.find((c) => c.groupedCard?.cardGroupMap?.REGULAR);
         const menuCards = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards;

         // Find the first card that actually has itemCards
         const itemCategory = menuCards?.find((c) => c.card?.card?.itemCards);
         const list = itemCategory?.card?.card?.itemCards || [];
         const items = list?.map(item => item?.card?.info);
         setResInfo(items); 
        };
        fetchInfo();
    },[])
    return resInfo;
}

export default useRestaurantMenu;