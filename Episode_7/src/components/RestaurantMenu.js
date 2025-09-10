import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const [resName, setResName] = useState("");
  const [menuList, setMenuList] = useState([]);

const fetchData = async() => {
    const data = await fetch(MENU_URL);
    const menu_data = await data.json();
    // console.log(menu_data);
    const res_name = menu_data?.data?.cards[0]?.card?.card?.text;
    setResName(res_name);
    const menu_list =  menu_data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    setMenuList(menu_list);

    // console.log("Res name: ",res_name);
    // console.log("Menu list: ",menu_list);
}

useEffect(() => {fetchData()},[]);

  return (
    <div className="menu">
        <h1>{resName}</h1>
        <h2>Menu:</h2>
        <ul>
          {menuList.map((item)=> (
            <MenuCard key={item.card.info.id} data={item.card.info}/>
          ))}
        </ul>
    </div>
  )
}

export default RestaurantMenu;