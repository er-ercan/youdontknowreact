import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { InfoContext } from "../App";

const Header = ({ title, headerSize }) => {
  const names = useContext(InfoContext);

  function getComponent(title, headerSize) {
    switch (headerSize) {
      case 1:
        return <h1>{names.job}</h1>;
      case 2:
        return <h2>{title}</h2>;
      default:
        return <h2>{"Hello"}</h2>;
    }
  }

  return (
    <>
      <NavLink
        activeClassName="activeClassName"
        activeStyle={{ color: "black" }}
        to="/"
      >
        Go Home
      </NavLink>
      {getComponent(title, headerSize)}
    </>
  );
};

export default Header;
