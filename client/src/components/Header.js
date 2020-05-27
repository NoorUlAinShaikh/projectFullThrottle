import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/E_Logo.png";
import "../styles/Header.css";
import { ALL_USERS } from "../helpers/constants";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item hi">
        <img alt="Logo" src={logo} />
      </Link>
      <div className="right menu">
        <Link to="/users" className="item">
          {ALL_USERS}
        </Link>
      </div>
    </div>
  );
};

export default Header;
