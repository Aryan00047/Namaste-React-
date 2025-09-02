import resList from "../utils/mockData";
import RestCards from "./RestCards";

const Body = () =>{
    return(
        <div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{}}>Top Rated Restaurants</button>
            </div>
            <div className="res-cards">
                {resList.filter((data) => data.info && data.info.id)
                .map((data) => 
                    <RestCards key={data.info.id} info={data.info}/>
            )}
            </div>
        </div>
    )
}

export default Body;