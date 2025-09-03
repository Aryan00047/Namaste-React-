import { useState } from "react";
import resList from "../utils/mockData";
import RestCards from "./RestCards";

const Body = () => {
  const [list, setList] = useState(resList);
  const [showFiltered, setShowFiltered] = useState(false);

  const handleClick = ()=>{
    if(showFiltered){
        const filteredList = list.filter((res) => res.info.avgRating > 4.5);
        setList(filteredList);
    }
    else{
        setList(resList);
    }
    setShowFiltered(!showFiltered);
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
          .filter((data) => data.info && data.info.id)
          .map((data) => (
            <RestCards key={data.info.id} info={data.info} />
          ))}
      </div>
    </div>
  );
};

export default Body;
