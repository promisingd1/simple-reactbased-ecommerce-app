import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo_container">
        <img src={logo} alt="ema john ecommerce logo"></img>
      </div>
      <div>
        <nav className="nav_container">
          <a href="/shop">Shop</a>
          <a href="/order-review">Order Review</a>
          <a href="/inventor">Manage Inventory</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
