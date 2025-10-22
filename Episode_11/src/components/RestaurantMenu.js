import { useParams } from "react-router";
import MenuCard from "./MenuCards";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Menu:</h1>

      <div className="flex flex-col items-center gap-6 w-full">
        {resInfo?.map((item) => (
          <MenuCard key={item?.card?.card?.title} info={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
