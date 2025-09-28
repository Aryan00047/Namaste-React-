import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./OnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
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