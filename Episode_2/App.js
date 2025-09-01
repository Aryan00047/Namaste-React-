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

const Body = () => {
  return(
    <div className="body">
      <div className="Search">Search</div>
      <div className="restaurant-container">
        //RestaurantCard
      </div>
    </div>
  )
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
