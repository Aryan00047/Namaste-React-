import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./OnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="flex justify-between p-4 bg-pink-200 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <div className="logo">
        <img className="w-20" src={LOGO_URL} alt="logo"/>
      </div>
      <div className="flex items-center">
        <ul className="px-4 flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li className="login-section">
            <button
              className="login-btn"
              onClick={() => {
                setBtn(btn === "Login" ? "Logout" : "Login");
              }}
            >
              {btn}
            </button>
            <span className="status-dot">{isOnline ? "🟢" : "🔴"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;