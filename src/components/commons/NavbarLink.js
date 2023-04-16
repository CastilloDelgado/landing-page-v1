import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ linkData, currentLocation }) => {
  return (
    <li
      className={`${
        currentLocation === linkData.path && "font-bold"
      } mr-3 hover:underline`}
    >
      <Link to={linkData.path}>{linkData.title}</Link>
    </li>
  );
};

export default NavbarLink;
