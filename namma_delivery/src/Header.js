import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="/logo.png" alt="Namma Delivery" />

      <div className="header_serch">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_navbar">
        <div className="header_option">
          <span className="header_optionLine1">Hello Guest, </span>
          <span className="header_optionLine2">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLine1">Returns </span>
          <span className="header_optionLine2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLine1">Your </span>
          <span className="header_optionLine2">Prime</span>
        </div>

        <div className="header_cart">
          <ShoppingCartSharpIcon className="header_cartIcon" />
          <span className="header_cartCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
