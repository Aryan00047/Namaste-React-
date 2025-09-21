import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";

const Header = () =>{
    const [btn, setBtn] = useState("Login");

    return(
        <div className="header">
            <img className="logo" src= {LOGO_URL}/>
            <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <button className="login-btn" onClick={()=>{
                    if(btn === "Login" ? setBtn("Logout") : setBtn("Login"));
                }}>{btn}</button>
            </ul>  
            </div>

        </div>
    )
}

export default Header;