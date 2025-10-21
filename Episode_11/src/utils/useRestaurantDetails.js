import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantDetails = () =>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async() => {
            try{
            const res = await fetch(RESTAURANT_URL);
            const data = await res.json();
            const restaurants = data?.data?.cards?.find((c) => c.groupedCard?.cardGroupMap?.RESTAURANT);
            const resData = restaurants?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.map((c) => c?.card?.card?.info) || [];
            setAllRestaurants(resData);   
            }catch(err){
                console.log(err);
            }finally{
                setIsLoading(false);
            }
            
        };
        fetchData()
    },[])
    return {allRestaurants, isLoading};
}

export default useRestaurantDetails;