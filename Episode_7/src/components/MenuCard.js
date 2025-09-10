import { CDN_URL } from "../utils/constants"

const MenuCard = ({data}) => {
    return(
        <div className="menu-card">
            <div className="menu-card-content">
                <h2>{data?.name}</h2>
                <p>{data?.description}</p>
                <h4>Cost: Rs {data?.price/100 || data?.defaultPrice/100}</h4>
            </div>
            <img className="menu-img" src={CDN_URL + data?.imageId}/>
        </div>
    )
}
export default MenuCard