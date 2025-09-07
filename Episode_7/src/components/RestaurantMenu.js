import { useEffect } from "react";

const RestaurantMenu = () => {

useEffect(fetchData(),[]);

const fetchData = async() => {
    const data = await fetch("");
    const json = await data.json();
}

  return (
    <div className="menu">
        <h1>Restaurant Name: </h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Coffee</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;