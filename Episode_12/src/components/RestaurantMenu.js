import MenuCard from "./MenuCards";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Menu</h1>

      <div className="flex flex-col items-center gap-6 w-full">
        {resInfo?.map((item, index) => (
          <MenuCard
            key={item?.card?.card?.title}
            info={item}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
