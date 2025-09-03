import { useState } from "react";
import resList from "../utils/mockData";
import RestCards from "./RestCards";

const Body = () =>{

    const [list, setList] = useState(resList)
    return(
        <div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = list.filter((res)=> res.info.avgRating > 4.5);
                    setList(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-cards">
                {list.filter((data) => data.info && data.info.id)
                .map((data) => 
                    <RestCards key={data.info.id} info={data.info}/>
            )}
            </div>
        </div>
    )
}

export default Body;