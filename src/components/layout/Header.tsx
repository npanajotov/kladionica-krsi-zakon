import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import routes from "../../routes";

const Header: React.FC = () => {
  const route = routes[0];

  return (
    <header className="container">
      <NavLink exact={route.exact} to={route.path} className="logo">
        <img src="logo" alt="logo" />
      </NavLink>
      <Navigation />
    </header>
  );
};

export default Header;
