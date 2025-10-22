import { useState } from "react";
import ItemCards from "./ItemCards";

const MenuCard = ({ info }) => {

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  }

  return (
    <div className="p-4 border border-gray-200 rounded-2xl w-9/12 bg-white shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-xl font-bold">{info?.card?.card?.title}</span>
        <span className="">🔽</span>
      </div>

      {showItems && <ItemCards info={info} />}
    </div>
  );
};


export default MenuCard;