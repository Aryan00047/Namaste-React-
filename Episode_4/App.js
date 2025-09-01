import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () =>{
    return(
        <div className="header">
            <img className="logo" src="https://imgs.search.brave.com/9XaJJNyqkLAWHeww0KXyVlrH9nHwiU1dXOUaG0RfB6o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG9nby1kZXNp/Z24tcmVzdGF1cmFu/dC1mb29kLWNvbXBh/bnlfMTI1MzIwMi0z/ODMzOS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"/>
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

const RestCards = () => {
    return(
        <div className="res-container">
            <img className="res-img" alt="res-img" src="https://imgs.search.brave.com/NXvSDM2MIsxZzXmk1D1qMtLwXvwbPNu2WlS2yKr_0Jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvYmFuZ2Fsb3Jl/L2UzLzA4MHB4eDgw/Lnh4ODAuMTQwMTE2/MTIyNzM4Lm00ZTMv/Y2F0YWxvZ3VlL21l/Z2hhbmEtZm9vZHMt/Z3JhbmQtbWFyYXRo/YWhhbGxpLWJhbmdh/bG9yZS1hbmRocmEt/cmVzdGF1cmFudHMt/YzNtcWtsNXlrZS5q/cGc_dz0zODQwJnE9/NzU"/>
            <h3>Food Name</h3>
            <h4>Food Description</h4>
            <h4>Rating</h4>
            <h4>Delievery Time</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div>
            <div className="search">
                <h4>Search</h4>
            </div>
            <div className="res-cards">
                <RestCards/>
                <RestCards/><RestCards/><RestCards/><RestCards/><RestCards/><RestCards/><RestCards/>
            </div>
        </div>
    )
}

const Footer = () => {
    return(
        <div className="Footer">
            <h3>Copywright</h3>
            <h3>Social Media</h3>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app-layout">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)