import React from "react";
import ReactDom from "react-dom";
import logo from "./Episode_4/assets/logo.webp"
/**
 * Header
 * -logo
 * - Nav items
 * Body
 * - Search
 * -Restaurant Container
 * - Restaurant Card
 * Footer
 * - copywright
 * - links
 * - address
 * - contact
 * 
 */

// top level component

const Header = () => {
    return(
        <div className="header">
            <div>
                <img className="logo" src="https://imgs.search.brave.com/49U6CKGzVLS2F2wOT4LlNKRbxeP9SH-TsF2b396ghf8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYwLzBi/LzQ5LzYwMGI0OTEx/MGJhNTcxMDhiZTdh/YzMyYWY3NmZmNWI2/LmpwZw/"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)