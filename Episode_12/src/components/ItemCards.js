import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";

const ItemCards = ({ info , isCart = false}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    const itemsToRender = isCart
    ? info // already an array of items
    : info?.card?.card?.itemCards || [];

    return (
        <div>
          {itemsToRender?.map((item) => (
            <div key={item?.card?.info?.id} className="m-4 p-2 border-b-2 border-gray-200 flex">
                <div className="flex-1">
                <div>
                <span className="font-bold">{item?.card?.info?.name}</span>
                <span className="text-md text-gray-600 ml-2"> - ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                </div>
                <div>
                <span className="text-sm text-gray-600 mt-1 ">{item?.card?.info?.description}</span>
                </div>
                </div>
                <div>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded-lg shadow-md"
                    onClick={() => handleAddItem(item)}
                    >ADD</button>
                </div>
        </div>
    ))}
        </div>
    )
}

export default ItemCards;