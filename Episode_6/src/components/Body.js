import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestCards from "./RestCards";

const Body = () => {
  const [list, setList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [showFiltered, setShowFiltered] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9261243&lng=77.60707029999999&str=north%20indian&trackingId=undefined&submitAction=ENTER&queryUniqueId=bccdc5ae-30de-39ce-57d8-d7b8c618d783");
        const data = await res.json();
        const restaurants = data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
        ?.map((c)=> c.card.card.info);
        console.log(restaurants);
        setAllRestaurants(restaurants);
        setList(restaurants);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
  };
  fetchData();
}, []);


  if(isLoading){
    return(
      <div className="shimmer-container">
        <div className="shimmer-card"><h3></h3></div>
        <div className="shimmer-card"><h3></h3></div> 
        <div className="shimmer-card"><h3></h3></div>
        <div className="shimmer-card"><h3></h3></div>
        <div className="shimmer-card"><h3></h3></div>
        <div className="shimmer-card"><h3></h3></div>
        <div className="shimmer-card"><h3></h3></div>
        <div className="shimmer-card"><h3></h3></div>
        <div className="shimmer-card"><h3></h3></div>
        <div className="shimmer-card"><h3></h3></div>
        <div className="shimmer-card"><h3></h3></div>
      </div>
    )
  }
  return (
    <div>
      <div className="filter">
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
            <RestCards key={data.id} info={data} />
          ))}
      </div>
    </div>
  );
};

export default Body;
