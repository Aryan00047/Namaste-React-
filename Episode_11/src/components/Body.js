import { useEffect, useState } from "react";
import RestCards, {withLabelPromoted} from "./RestCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import useOnlineStatus from "./OnlineStatus";

const Body = () => {
  const isOnline = useOnlineStatus();
  const [list, setList] = useState([]);
  const {allRestaurants, isLoading} = useRestaurantDetails();
  const [showFiltered, setShowFiltered] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const RestCardsPromoted = withLabelPromoted(RestCards);
  const handleClick = ()=>{
    if(showFiltered){
        const filteredList = allRestaurants.filter((res) => res.avgRating > 4.5);
        setList(filteredList);
    }
    else{
        setList(allRestaurants);
    }
    setShowFiltered(!showFiltered);
  }

    const searchRestaurants = () => {
    const restaurants_list = allRestaurants.filter((res)=>res.name.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(restaurants_list);
    setList(restaurants_list );    
  }

  useEffect(()=>{
        setList(allRestaurants);
}, [allRestaurants]);

  if(isOnline === false){
    return <h1>Offline, Please check your internet connection!!</h1>
  }
  else{
  return isLoading ? (<Shimmer/>) : (
    <div className="pl-12 ">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input className="border border-solid border-black h-6 " type="text" onChange={(e)=>{setSearchTerm(e.target.value)}} value={searchTerm}/>
          <button className="px-2 py-.5 bg-blue-100 ml-1 rounded-lg " onClick={searchRestaurants}>Search</button> 
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button className="px-2 py-.5 bg-gray-200" onClick={handleClick}> {showFiltered ? "Top Rated Restaurants" : "Show All"} </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {list
          .filter((data) => data && data.id)
          .map((data) => (
            <Link className="res-link" key={data.id} to={`/restaurants/${data.id}`}>
              {data.promoted? <RestCardsPromoted info={data}/> : <RestCards info={data} />}
              </Link>
          ))}
      </div>
    </div>
  );}
};

export default Body;
