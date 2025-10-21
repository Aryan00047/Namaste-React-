import { useEffect, useState } from "react";
import { mockMenu } from "./mockMenu";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    // Directly use mockMenu (already an object)
    const data = mockMenu?.data;
    const menuCards = data?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    // Extract all categories that contain itemCards
    const itemCategories = menuCards?.filter((c) => c.card?.card?.itemCards);

    // Flatten all itemCards across categories
    const items = itemCategories
      ?.flatMap((cat) =>
        cat.card.card.itemCards?.map((item) => item.card.info)
      )
      ?.filter(Boolean);

    setResInfo(items || []);
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
