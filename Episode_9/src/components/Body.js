import { useEffect, useState } from "react";
import RestCards from "./RestCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import OnlineStatus from "./OnlineStatus";

const Body = () => {
  const isOnline = OnlineStatus();
  const [list, setList] = useState([]);
  const {allRestaurants, isLoading} = useRestaurantDetails();
  const [showFiltered, setShowFiltered] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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
    <div>
      <div className="buttons">
        <input className="search-text" type="text" onChange={(e)=>{setSearchTerm(e.target.value)}} value={searchTerm}/>
        <button className="search-btn" onClick={searchRestaurants}>Search</button>
        <button
          className="filter-btn"
          onClick={handleClick}
        >
          {showFiltered ? "Top Rated Restaurants" : "Show All"}
        </button>
      </div>
      <div className="res-cards">
        {list
          .filter((data) => data && data.id)
          .map((data) => (
            <Link className="res-link" key={data.id} to={`/restaurants/${data.id}`}><RestCards info={data} /></Link>
          ))}
      </div>
    </div>
  );}
};

export default Body;
