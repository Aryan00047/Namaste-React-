// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child 1", key: "1" }, [
//     React.createElement("h1", { key: "1" }, "Heading 1"),
//     React.createElement("h2", { key: "2" }, "Heading 2"),
//   ]),
//   React.createElement("div", { id: "Child 2", key: "2" }, [
//     React.createElement("h1", { key: "1" }, "Heading 1"),
//     React.createElement("h2", { key: "2" }, "Heading 2"),
//   ]),
// ]);

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/** Episode 4 */

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
 * -- Img
 * -- Name of Cuisine, Restaurant, star rating, delievery ties
 * Footer
 * - copywright
 * - links
 * - address
 * - contact
 *
 */

// top level component

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://imgs.search.brave.com/9XaJJNyqkLAWHeww0KXyVlrH9nHwiU1dXOUaG0RfB6o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG9nby1kZXNp/Z24tcmVzdGF1cmFu/dC1mb29kLWNvbXBh/bnlfMTI1MzIwMi0z/ODMzOS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
        />
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
  );
};

const StyleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={StyleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://imgs.search.brave.com/NXvSDM2MIsxZzXmk1D1qMtLwXvwbPNu2WlS2yKr_0Jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvYmFuZ2Fsb3Jl/L2UzLzA4MHB4eDgw/Lnh4ODAuMTQwMTE2/MTIyNzM4Lm00ZTMv/Y2F0YWxvZ3VlL21l/Z2hhbmEtZm9vZHMt/Z3JhbmQtbWFyYXRo/YWhhbGxpLWJhbmdh/bG9yZS1hbmRocmEt/cmVzdGF1cmFudHMt/YzNtcWtsNXlrZS5q/cGc_dz0zODQwJnE9/NzU"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
